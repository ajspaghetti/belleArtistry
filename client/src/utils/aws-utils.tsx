import { S3 } from 'aws-sdk';

// Retrieve AWS access key ID and secret access key from environment variables
const accessKeyId = import.meta.env.local.VITE_AWS_ACCESS_KEY_ID;
const secretAccessKey = import.meta.env.local.VITE_AWS_SECRET_ACCESS_KEY;

// Create an S3 instance with the provided credentials
const s3 = new S3({
  accessKeyId,
  secretAccessKey,
});

// Function to upload a file to S3
export const uploadFileToS3 = (file: File) => {
  // Implement code to upload file to S3 using the s3 object
  const params = {
    Bucket: 'your-bucket-name', // TODO: add bucket details
    Key: `path/to/${file.name}`, // TODO: add path/to/ details
    Body: file,
    ContentType: file.type,
  };

  return s3.upload(params).promise();
};
