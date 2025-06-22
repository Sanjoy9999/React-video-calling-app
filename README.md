# React Video Chat App

A real-time video chat application built with React and WebRTC technology.

## Overview

This project implements a video chat application using React for the frontend and WebRTC for peer-to-peer video communication. The application allows users to create or join rooms for video conferencing.

## Features

- Create and join video chat rooms
- Real-time video and audio communication
- Lobby system for room management
- Responsive user interface

## Tech Stack

- **Frontend**: React 19.1.0
- **Routing**: React Router DOM 7.6.2
- **Media Player**: React Player 2.16.0
- **Real-Time Communication**: WebRTC (via Socket.IO)
- **WebSocket Client**: Socket.IO Client 4.8.1

## Project Structure

- `/client` - React frontend application
  - `/src` - Source code
    - `/screens`
      - `Lobby.js` - Lobby screen for creating/joining rooms
      - `Room.js` - Video chat room implementation
    - `App.js` - Main application component with routing

## Getting Started

### Prerequisites

- Node.js (latest stable version)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone <repository-url>
   cd React\ video\ chat\ app
   ```

2. Install client dependencies
   ```bash
   cd client
   npm install
   ```

3. Start the client application
   ```bash
   npm start
   ```

## Usage

1. Access the application through your browser at `http://localhost:3000`
2. In the lobby, enter your name and a room ID to create or join a room
3. Allow camera and microphone permissions when prompted
4. Start video chatting with other participants in the room

## Development

The application uses React's development server with hot reload.

```bash
npm start
```

## Building for Production

To create a production build:

```bash
npm run build
```

## License

[MIT License](LICENSE)
