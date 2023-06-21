import AWS from "aws-sdk";

AWS.config.update({
  accessKeyId: "AKIAQXZ7WJWOJA7EH7FS",
  secretAccessKey: "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",
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
