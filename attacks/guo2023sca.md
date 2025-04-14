---
source: https://link.springer.com/chapter/10.1007/978-981-99-8730-6_7
year: 2023
authors: Qian Guo, Denis Nabokov, Alexander Nilsson, Thomas Johansson
family:
  - code
  - lattice/M-LWE
  - KEM
scheme:
  - HQC
  - Kyber
scenario: static key
leaked: secret key
implementation:
  - SW
  - masked
adversarial:
  - observe
  - choose ciphertext
possible countermeasures:
  - constant-time
target:
  - FO transformation
techniques:
  - timing
---
# SCA-LDPC: A Code-Based Framework for Key-Recovery Side-Channel Attacks on Post-quantum Encryption Schemes