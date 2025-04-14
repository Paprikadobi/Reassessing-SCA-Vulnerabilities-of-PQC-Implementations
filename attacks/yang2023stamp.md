---
source: https://eprint.iacr.org/2023/1184
year: 2023
authors: Bolin Yang, Prasanna Ravi, Fan Zhang, Ao Shen, Shivam Bhasin
family:
  - lattice/M-LWE
  - KEM
scheme:
  - Kyber
scenario: ephemeral key
leaked: secret key
implementation:
  - SW
adversarial:
  - observe
  - profile
possible countermeasures:
  - masking
  - shuffling
target:
  - pointwise multiplication
techniques:
  - profiling/template
---
# STAMP-Single Trace Attack on M-LWE Pointwise Multiplication in Kyber

For masking countermeasure, that would help only if the secret key is remasked for each multiplication.

