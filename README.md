# ESP32 LED Control Server

A Node.js/TypeScript server that provides a REST API to control an ESP32's LED state. This server acts as a bridge between your application and the ESP32 device.

## 🚀 Features

- REST API endpoint to control LED state
- TypeScript implementation for type safety
- CORS enabled for cross-origin requests
- Error handling for ESP32 communication
- Simple and lightweight implementation

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- ESP32 device with LED control firmware
- Network access to ESP32 device

## 🛠️ Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd <your-repo-name>
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Configure the ESP32 IP address:
   - Open `src/index.ts`
   - Update the `ESP32_IP` constant with your ESP32's IP address:
   ```typescript
   const ESP32_IP = "http://192.168.1.65"; // Replace with your ESP32's IP
   ```

## 🚀 Usage

1. Start the server:

```bash
npm start
# or
yarn start
```

2. The server will start on port 3001 (default)

3. Control the LED using the following endpoints:

```bash
# Turn LED ON
curl http://localhost:3001/led/on

# Turn LED OFF
curl http://localhost:3001/led/off
```

## 📝 API Documentation

### GET /led/:state

Controls the LED state on the ESP32 device.

**Parameters:**

- `state` (path parameter): Either "on" or "off"

**Responses:**

- 200: Success - LED state changed
- 400: Bad Request - Invalid state parameter
- 500: Server Error - Failed to communicate with ESP32

## 🔧 Development

1. Install development dependencies:

```bash
npm install -D typescript @types/express @types/cors
# or
yarn add -D typescript @types/express @types/cors
```

2. Build the TypeScript code:

```bash
npm run build
# or
yarn build
```

## 📦 Project Structure

```
.
├── src/
│   └── index.ts      # Main server file
├── package.json      # Project dependencies
├── tsconfig.json     # TypeScript configuration
└── README.md         # This file
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## ⚠️ Troubleshooting

If you encounter any issues:

1. Verify the ESP32 is powered on and connected to the network
2. Confirm the ESP32 IP address is correct in the configuration
3. Check that the ESP32's LED control endpoint is working by testing directly
4. Ensure no firewall is blocking the connection

## 📞 Support

For support, please open an issue in the repository or contact the maintainers.
