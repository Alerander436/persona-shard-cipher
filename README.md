# Persona Shard

Encrypted Mental Health Survey DApp using Fully Homomorphic Encryption (FHEVM)

## 🚀 Live Demo

**Vercel Deployment**: [https://persona-shard1.vercel.app/](https://persona-shard1.vercel.app/)

**Video Demo**: [persona-shard.mp4](persona-shard.mp4)

> 📹 **Demo Video**: Watch the full demonstration of the encrypted mental health survey functionality

## Overview

Persona Shard is a decentralized application that enables privacy-preserving mental health surveys using Zama's Fully Homomorphic Encryption Virtual Machine (FHEVM). Users can submit survey responses that are encrypted on-chain, and only they can decrypt their own results.

## Features

- **Privacy-Preserving Surveys**: All survey responses are encrypted using FHEVM
- **Decentralized**: Built on Ethereum-compatible blockchains
- **User-Controlled Decryption**: Only survey creators can decrypt their responses
- **Multi-Network Support**: Works on both local Hardhat network and Sepolia testnet

## Tech Stack

- **Frontend**: React + Vite + TypeScript
- **Backend**: Solidity smart contracts
- **Encryption**: Zama FHEVM (@zama-fhe/relayer-sdk)
- **Blockchain**: Hardhat + Ethers.js
- **Wallet**: RainbowKit + Wagmi

## Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
# frontend/.env
VITE_WALLETCONNECT_PROJECT_ID=your_walletconnect_project_id
```

### Local Development

1. Start local Hardhat node:
```bash
npm run local
```

2. Deploy contracts:
```bash
npm run deploy:local
```

3. Start frontend:
```bash
cd frontend
npm run dev
```

### Testnet Deployment

1. Deploy to Sepolia:
```bash
npm run deploy:sepolia
```

2. Update contract addresses in frontend config

## Project Structure

```
persona-shard/
├── contracts/           # Solidity smart contracts
├── frontend/           # React frontend application
├── test/               # Contract tests
├── tasks/              # Hardhat tasks
├── deploy/             # Deployment scripts
└── types/              # TypeScript type definitions
```

## Architecture

The application consists of:

1. **Smart Contracts**: Handle encrypted survey submissions and storage
2. **Frontend**: User interface for creating and decrypting surveys
3. **FHEVM Integration**: Client-side encryption/decryption using Zama SDK

## Security

- All survey data is encrypted using Fully Homomorphic Encryption
- Private keys never leave the user's browser
- Only survey creators can decrypt their own responses

## License

MIT License - see LICENSE file for details
