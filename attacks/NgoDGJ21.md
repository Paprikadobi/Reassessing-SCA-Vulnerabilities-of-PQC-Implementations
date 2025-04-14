---
source: https://eprint.iacr.org/2021/079.pdf
year: 2021
authors: Kalle Ngo, Elena Dubrova, Qian Guo, and Thomas Johansson
family:
  - lattice/LWR
scheme:
  - Saber
scenario: static key
leaked: secret key, Session Key (Message)
implementation:
  - SW
  - masked
adversarial:
  - profile without clone
  - observe
possible countermeasures: 
target:
  - decoder
techniques:
  - profiling/deep-learning
implementation source: BeirendonckDKBV21
Description: |-
  It says the profiling is without clone device. But still they can produce as much as traces they want with the known labels for the messages bit. So complete profiling. 
  Also when it says single trace it does not mean ephemeral setting. it use a single trace for a single message or capture multiple trace for the single message (repeat decryption and use majority voting)
---
# A Side-Channel Attack on a Masked IND-CCA Secure Saber KEM