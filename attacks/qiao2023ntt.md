---
source: https://eprint.iacr.org/2023/1866
year: 2023
authors: Zehua Qiao, Yuejun Liu, Yongbin Zhou, Mingyao Shao, Shuo Sun
family:
  - lattice/M-LWE
  - lattice/M-SIS
  - KEM
  - DSA
scheme:
  - Kyber
  - Dilithium
scenario: static key
leaked: secret key
implementation:
  - SW
adversarial:
  - observe
possible countermeasures:
  - shuffling
target:
  - pointwise multiplication
techniques:
  - CPA
  - cryptanalysis
---
# When NTT Meets SIS: Efficient Side-channel Attacks on Dilithium and Kyber

> [!quote] The ultimate objective of attacks is to deduce the entire private key, which entails significant computational costs. An emerging strategy is to recover partial coefficients via SCAs instead and recover the remaining ones using other methods, such as enumeration and lattice reduction.
