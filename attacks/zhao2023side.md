---
source: https://ieeexplore.ieee.org/abstract/document/10175157
year: 2023
authors: Yiqiang Zhao, Shijian Pan, Haocheng Ma, Ya Gao, Xintong Song, Jiaji He
family:
  - lattice/M-LWE
  - KEM
scheme:
  - Kyber
scenario: static key
leaked: secret key
implementation:
  - HW
adversarial:
  - observe
  - choose ciphertext
possible countermeasures:
  - masking/higher order
target:
  - pointwise multiplication
  - NTT
techniques:
  - CPA
  - CEMA
countermeasures:
  - masking/arithmetic
  - masking/combined
protected part:
  - decryption
  - decoder
  - NTT
  - pointwise multiplication
implementation source: xing2021compact, zijlstra2021lattice
traces:
---
# Side Channel Security Oriented Evaluation and Protection on Hardware Implementations of Kyber

