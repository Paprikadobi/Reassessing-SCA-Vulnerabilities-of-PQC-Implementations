---
source: https://tches.iacr.org/index.php/TCHES/article/view/12046
year: 2025
authors: Daniel J. Bernstein, Karthikeyan Bhargavan, Shivam Bhasin, Anupam Chattopadhyay, Tee Kiah Chia, Matthias J. Kannwischer, Franziskus Kiefer, Thales Paiva, Prasanna Ravi, Goutam Tamvada
family:
  - lattice/M-LWE
  - KEM
scheme:
  - Kyber
scenario: static key
leaked: secret key
implementation:
  - SW
adversarial:
  - observe
  - choose ciphertext
possible countermeasures:
  - constant-time
target:
  - decoder
  - compression
techniques:
  - timing
---
# KyberSlash: Exploiting secret-dependent division timings in Kyber implementations

- source code is constant-time, however compilers can introduce timing vulnerabilities through utilization of instructions that execute in variable-time (division)
- when compiling the code, division by constant is usually changed to multiplication, making it constant-time on most platforms, when adding flag -Os, to optimized for code size it is not change and the variable-time division is used
- for message decoding, they identified 3 different ranges, for which division time is different
- kyberslash2 enables plaintext-checking oracle
