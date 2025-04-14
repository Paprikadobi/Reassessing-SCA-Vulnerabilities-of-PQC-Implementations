---
source: https://link.springer.com/chapter/10.1007/978-3-031-41181-6_9
year: 2023
authors: Linus Backlund, Kalle Ngo, Joel Gärtner, Elena Dubrova
family:
  - lattice/M-LWE
  - lattice/M-LWR
  - KEM
scheme:
  - Kyber
  - Saber
scenario: static key
leaked: secret key
implementation:
  - SW
  - masked
  - shuffled
adversarial:
  - observe
  - choose ciphertext
  - profile
possible countermeasures:
  - detect malicious ciphertexts
  - encrypt-then-sign
target:
  - encoder
techniques:
  - profiling/deep-learning
implementation source: HeinzKLPSS22, BeirendonckDKBV21
---
# Secret Key Recovery Attack on Masked and Shuffled Implementations of CRYSTALS-Kyber and Saber

