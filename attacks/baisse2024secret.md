---
source: https://eprint.iacr.org/2024/440
year: 2024
authors: Chloé Baïsse, Antoine Moran, Guillaume Goy, Julien Maillard, Nicolas Aragon, Philippe Gaborit, Maxime Lecomte, Antoine Loiseau
family:
  - code
  - KEM
scheme:
  - HQC
scenario: ephemeral key
leaked: secret key
implementation:
  - SW
  - Simulated
adversarial:
  - observe
  - choose ciphertext
  - profile
possible countermeasures:
  - masking
  - shuffling
  - detect malicious ciphertexts
target:
  - decoder/Reed-Muller
techniques:
  - SASCA
implementation source: Simulation
Description: simulated physical side-channel attacks against HQC. Also they used ISD
---
# Secret and Shared Keys Recovery on Hamming Quasi-Cyclic with SASCA

