const FormData = require('form-data');
const fs = require('fs');
const axios = require('axios');
const path = require('path');

async function uploadImage() {
  try {
    const form = new FormData();
    
    // Add image file
    const imagePath = path.join(__dirname, 'test-image.jpg'); // Change to your image path
    if (!fs.existsSync(imagePath)) {
      console.log('❌ Image file not found at:', imagePath);
      console.log('Please add a test-image.jpg file to the project root');
      return;
    }
    
    form.append('image', fs.createReadStream(imagePath));
    form.append('title', 'Test Product');
    form.append('description', 'This is a test product upload');
    form.append('price', 99.99);

    const response = await axios.post(
      'http://localhost:3000/api/productRoutes/products',
      form,
      {
        headers: form.getHeaders()
      }
    );

    console.log('✅ Image uploaded successfully!');
    console.log('Response:', response.data);
  } catch (error) {
    console.error('❌ Upload failed:', error.response?.data || error.message);
  }
}

uploadImage();
