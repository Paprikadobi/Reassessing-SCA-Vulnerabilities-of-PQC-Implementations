---
source: https://dl.acm.org/doi/abs/10.1145/3591866.3593072
year: 2023
authors: Elena Dubrova, Kalle Ngo, Joel Gärtner, Ruize Wang
family:
  - lattice/M-LWE
  - KEM
scheme:
  - Kyber
scenario: static key
leaked: session key
implementation:
  - SW
  - masked
adversarial:
  - observe
  - choose ciphertext
  - profile
possible countermeasures: 
target:
  - decoder
techniques:
  - profiling/deep-learning
implementation source: HeinzKLPSS22  + self changes for higher order
Description: This attack recovers the session key but uses a cyclic rotations on the message and collects more than one trace from message decryption for its recovery.
---
# Breaking a Fifth-Order Masked Implementation of CRYSTALS-Kyber by Copy-Paste

