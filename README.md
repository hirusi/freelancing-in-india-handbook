# Freelancing In India: A Handbook 📗 ☔️

## Overview

### Why put together this handbook?

The legal framework is a mess. Consulting chartered accountants, banks, and the tax office, all of whom have their own version of the law, is a headache you shouldn't have to deal with when you're just starting out. This is to simplify things for you - give you a simple and comprehensive starting point to begin making sense of things.

### TL:DR;

#### Any registration mandatory?

Theoretically, you do not need anything whether you have foreign clients or just domestic clients, as long as you're earning below 20 lakhs per annum. Beyond that, GST registration becomes compulsory.

IEC (Import-Export Code) is optional for export of services.

SOFTEX compliance is mandatory for those selling apps/games/softwares as a whole package, not for provision of a continuous service. Basically, software is treated like a good.

#### Constitution of your business
* Individual and sole proprietorship are **different** things. You need a registration under Shops & Establishment Act, 1932, for the latter. An individual operates completely in their personal capacity - an Aadhaar card and a PAN card is all you need at the moment of writing for this.

#### GST
* Export is considered inter-state supply.
* Zero-rated is not the same as exempt. 0% =/= Nil.

#### Banks
* Most banks do not issue an Foreign Inward Remittance Certificate. To avoid making a mess, ask your branch of interest prior to opening an account with them. HDFC is anecdotally known to issue eFIRCs - though you may have to try your luck.

* The purpose code applicable to you will be **P0802 (Software consultancy/implementation, other than those covered in SOFTEX forms)**.

## Defining "Export of Services"

Service export falls under [Section 2(6) of IGST Act](https://gst.caclub.in/section-26-of-igst-act-meaning-of-export-of-services/). You must satisfy all five conditions under the GST Act:

> Definition of the term “Export of Services” under the Integrated Goods and Services Tax (IGST) Act, 2017  
As per Section 2(6) of the Integrated Goods and Services Tax (IGST) Act, 2017, unless the context otherwise requires, the term “export of services” means the supply of any service when —
> * the supplier of service is located in India;
> * the recipient of service is located outside India;
> * the place of supply of service is outside India;
> * the payment for such service has been received by the supplier of service in convertible foreign exchange; and
> * the supplier of service and the recipient of service are not merely establishments of a distinct person in accordance with Explanation 1 in section 8.

## Receiving payments internationally

### SWIFT

The most well understood method of international transfer is SWIFT. Bankers get it, government babus get it, your local CA gets it. If you're registered under GST, take note of [CGST Rule 89(2)(c)](https://www.gst.caclub.in/rule-89-of-cgst-rules-2017-application-for-refund-of-tax-interest-penalty-fees-or-any-other-amount/) and [circular number 37/2018](http://www.cbec.gov.in/resources/htdocs-cbec/gst/circularno-37-cgst.pdf) dated 15.03.2018. You specifically need either a Bank Realisation Certificate or a Foreign Inward Remittance Certificate to "prove" your export was legal.

Unfortunately, most banks refuse to issue an FIRC. Transferwise has two excellent resources on understanding this: [What’s a Foreign Inward Remittance Certificate (FIRC) and how can I request one?](https://transferwise.com/help/article/2630027/indian-rupee-transfers/whats-a-foreign-inward-remittance-certificate-firc-and-how-can-i-request-one) and [FIRC: A guide to its meaning and procedure](https://transferwise.com/us/blog/firc-meaning-india). To quote for brevity:

> Recently in 2016, the RBI updated regulations as far as what banks will issue FIRCs for. So this may depend on the bank. But, in general the following 2 documents can be issued by “AD (Authorized Dealer) Category I” banks in India as proof of foreign transfers to India:
> * Physical FIRC: Issued only for transfers (inward remittances) covering Foreign Direct Investment (FDI) / Foreign Institutional Investment (FII).
> * e-FIRC: According to the RBI, AD Category I banks must report all money transfers to India to Export and Data Monitoring Systems (EDPMS). This includes any advances or outstanding transfers they've received for the **export of goods or software.** Banks that receive these kinds of transfers will issue an electronic FIRC to EDPMS when the exporter asks them to.

> In all other cases of inward remittances, many banks in India may issue you a foreign inward remittance advice (similar to a certificate of inward remittance). This advice usually contains similar details as an FIRC. Please note, such advices are typically available for businesses only.

The two circulars that banks often quote are both from [FEDAI](https://www.investopedia.com/terms/f/fedai.asp): [SPL-04/2016](http://www.fedai.org.in/DocumentUploadFiles/SPL_04_2016_21_APRIL_2016.pdf) and [SPL-09/2016](http://www.fedai.org.in/DocumentUploadFiles/SPL_09_2016_8_JUNE_2016.pdf).

There are [102 member banks](http://www.fedai.org.in/InnerPageContent.aspx?Cid=2&SCid=1&SSCid=0) as of December 2017, which pretty much covers all banks you'd want to use for your business.

What does this mean for you? Exports which are zero-rated end up being taxed in a round-about way.  
The normal rate of IGST (as per your SAC) will be applicable - but remember you cannot collect it from your client! It has to come out of your pocket while at the same time, you are ineligible for a refund. In this way, you actually get taxed and worse, the tax comes from your own revenue - unlike the normal case where you simply collect it from a customer and deposit it with the government.

#### IFS Code (IFSC)

Certain banks might ask for your IFS code despite it being a SWIFT payment. This is risky as you may receive the money at a poor exchange rate as well as your bank being unable to issue you an Advice. This is because in this scenario, the origin bank might convert the funds to INR on their own and send that to your bank account. However, there is also a possibility this is just a regulatory requirement as per the origin bank and that the SWIFT transfer will proceed normally.

## Disclaimer

This only corresponds to web development/freelance coding at the moment.

I am not legally liable for anything that you pick up from here and use. Use your discretion. Consult a chartered accountant and/or a lawyer. This is a handbook for legal how-tos, but that does not mean it maintains legal standing or integrity.

Rules change frequently. I may not have kept up. You're free to open a PR to help other folks out.
