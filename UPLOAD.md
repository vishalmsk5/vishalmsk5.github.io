# Restore the main site and add a product page

This corrected package contains TWO levels. Upload ALL of its contents to the repository root, preserving folders:

index.html (restores your original Vishal Creation homepage with the new product card)
smart-work-manager/index.html (separate product details page)
smart-work-manager/privacy-policy.html
smart-work-manager/styles.css
smart-work-manager/product-config.js
smart-work-manager/product-page.js

Do not upload only the files INSIDE smart-work-manager at the repository root. That would replace the main homepage with the product page. Keep the existing CNAME, other policies, app-ads.txt and Google verification file unchanged. This package does not include or replace those files.

The original homepage is recovered from the HTML you supplied. Existing cards, tabs, Play Store links and Pinterest embeds are retained. Smart Work Manager appears in All Creation and Apps & Tools, and opens /smart-work-manager/.

The Smart Work Manager package identifier is taken from your app.json. Its public Play Store listing is NOT verified. The button defaults to Coming soon. Once published, check its URL in product-config.js and set playStorePublished to true. Never mark an unpublished app as available.

Google Branding URLs after deployment:
Homepage: https://vishalcreation.online/smart-work-manager/
Privacy: https://vishalcreation.online/smart-work-manager/privacy-policy.html
Authorised domain: vishalcreation.online

Future product template: copy the smart-work-manager folder under a NEW product slug; update all product text, canonical URLs, privacy disclosures, package URL and availability flag. Add a card in the homepage All Creation and appropriate category grid linking to that new folder. Copying a template does not automatically create a new product or a suitable privacy policy. Review disclosures for its actual data practices.

Prepared locally. Not pushed or published. After upload test root homepage, all category tabs, existing store buttons, new product details and privacy links.
