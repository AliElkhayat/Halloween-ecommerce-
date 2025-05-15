

import { Info } from "lucide-react";

const PrivacyPage = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Info className="h-6 w-6 text-halloween-purple" />
            <h1 className="font-creepster text-4xl md:text-5xl">Privacy Policy</h1>
          </div>
          <p className="text-muted-foreground">
            Last updated: May 7, 2025
          </p>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none mb-16">
          <h2 className="font-creepster text-2xl mb-4">1. Introduction</h2>
          <p>
            Welcome to Spectral Store. We are committed to protecting your personal information and your right to privacy. This Privacy Policy describes how we collect, use, and share information about you when you visit our website, shop in our store, or otherwise interact with us.
          </p>

          <h2 className="font-creepster text-2xl mt-8 mb-4">2. Information We Collect</h2>
          <p>
            We collect personal information that you provide to us, such as your name, email address, postal address, phone number, payment information, and any other information you choose to provide. We also automatically collect certain information when you visit our website, including your IP address, browser type, referring/exit pages, operating system, date/time stamp, and clickstream data.
          </p>

          <h2 className="font-creepster text-2xl mt-8 mb-4">3. How We Use Your Information</h2>
          <p>
            We use the information we collect to:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Process and fulfill your orders</li>
            <li>Communicate with you about your order, account, or customer service needs</li>
            <li>Send you marketing communications (if you've opted in)</li>
            <li>Improve our website, products, and services</li>
            <li>Prevent fraud and enhance the security of our website</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2 className="font-creepster text-2xl mt-8 mb-4">4. Sharing Your Information</h2>
          <p>
            We may share your information with:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Service providers who perform services on our behalf</li>
            <li>Professional advisors, such as lawyers and accountants</li>
            <li>Government authorities when required by law</li>
            <li>Business partners with your consent</li>
          </ul>

          <h2 className="font-creepster text-2xl mt-8 mb-4">5. Your Rights</h2>
          <p>
            Depending on your location, you may have certain rights regarding your personal information, such as the right to access, correct, or delete your personal information, or to object to certain processing.
          </p>

          <h2 className="font-creepster text-2xl mt-8 mb-4">6. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect the security of your personal information. However, please note that no method of transmission over the internet or electronic storage is 100% secure, so we cannot guarantee absolute security.
          </p>

          <h2 className="font-creepster text-2xl mt-8 mb-4">7. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
          </p>

          <h2 className="font-creepster text-2xl mt-8 mb-4">8. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at: 
            <a href="mailto:privacy@spectralstore.com" className="text-halloween-purple hover:underline ml-1">privacy@spectralstore.com</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
