import AWS from "aws-sdk";

console.log(process.env.AWS_ACCESS_KEY);

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: "us-east-1",
  signatureVersion: "v4",
});

const s3 = new AWS.S3();

export const handleDelete = (key: string) => {
  const params = {
    Bucket: "miuve",
    Key: key,
  };
  s3.deleteObject(params, (error, data) => {
    if (error) {
      console.error("Error deleting file:", error);
    } else {
      console.log("File deleted successfully");
    }
  });
};

export const downloadFromS3 = async (): Promise<any[]> => {
  const params = {
    Bucket: "miuve",
  };

  return new Promise((resolve, reject) => {
    s3.listObjectsV2(params, (err, data) => {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        const fileKeys: any = data.Contents?.map((file) => {
          return {
            key: file.Key,
            url: convertUrlToFile(file.Key),
            body: file,
          };
        });
        resolve(fileKeys);
      }
    });
  });
};

export const uploadToS3 = async (selectedFile: File) => {
  const s3 = new AWS.S3();
  if (!selectedFile) {
    return;
  }
  try {
    const params = {
      Bucket: "miuve",
      Key: `${Date.now()}.${selectedFile.name}` || "",
      Body: selectedFile,
    };
    await s3.upload(params).promise();
  } catch (err) {
    console.log(err);
  }
};

export const convertUrlToFile = (key: any) => {
  const params = {
    Bucket: "miuve",
    Key: key,
  };
  const signedUrl = s3.getSignedUrl("getObject", params);
  return signedUrl;
};
