export default function Footer() {
  return (
    <div className="absolute w-full border-t border-gray-200 bg-white py-5 text-center">
      <p className="text-gray-500">
        Built with ❤️ by{" "}
        <a
          className="font-medium text-gray-800 underline transition-colors"
          href="https://twitter.com/judicodes"
          target="_blank"
          rel="noopener noreferrer"
        >
          judicodes
        </a>
      </p>
    </div>
  );
}
