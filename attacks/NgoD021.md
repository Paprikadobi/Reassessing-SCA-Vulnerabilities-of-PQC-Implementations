---
source: https://dl.acm.org/doi/pdf/10.1145/3474376.3487277
year: 2021
authors: Kalle Ngo, Elena Dubrova, Thomas Johansson
family:
  - lattice/LWR
scheme:
  - Saber
scenario: static key
leaked: secret key, Session Key (Message)
implementation:
  - SW
  - masked
  - shuffled
adversarial:
  - choose ciphertext
  - observe
  - profile
possible countermeasures: 
target:
  - decoder
techniques:
  - profiling/deep-learning
implementation source: BeirendonckDKBV21 self added Shuffling
Description: The shuffling countermeasure is self added (YF)
---
# Breaking Masked and Shuffled CCA Secure Saber KEM by Power Analysis