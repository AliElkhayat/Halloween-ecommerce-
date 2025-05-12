
import { FileText } from "lucide-react";

const TermsPage = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-2">
            <FileText className="h-6 w-6 text-halloween-purple" />
            <h1 className="font-creepster text-4xl md:text-5xl">Terms & Conditions</h1>
          </div>
          <p className="text-muted-foreground">
            Last updated: May 7, 2025
          </p>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none mb-16">
          <h2 className="font-creepster text-2xl mb-4">1. Acceptance of Terms</h2>
          <p>
            By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by these terms, please do not use this website.
          </p>

          <h2 className="font-creepster text-2xl mt-8 mb-4">2. Use License</h2>
          <p>
            Permission is granted to temporarily download one copy of the materials on Spectral Store's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Modify or copy the materials</li>
            <li>Use the materials for any commercial purpose</li>
            <li>Attempt to decompile or reverse engineer any software contained on Spectral Store's website</li>
            <li>Remove any copyright or other proprietary notations from the materials</li>
            <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
          </ul>

          <h2 className="font-creepster text-2xl mt-8 mb-4">3. Disclaimer</h2>
          <p>
            The materials on Spectral Store's website are provided on an 'as is' basis. Spectral Store makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>

          <h2 className="font-creepster text-2xl mt-8 mb-4">4. Limitations</h2>
          <p>
            In no event shall Spectral Store or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Spectral Store's website, even if Spectral Store or a Spectral Store authorized representative has been notified orally or in writing of the possibility of such damage.
          </p>

          <h2 className="font-creepster text-2xl mt-8 mb-4">5. Accuracy of Materials</h2>
          <p>
            The materials appearing on Spectral Store's website could include technical, typographical, or photographic errors. Spectral Store does not warrant that any of the materials on its website are accurate, complete or current. Spectral Store may make changes to the materials contained on its website at any time without notice.
          </p>

          <h2 className="font-creepster text-2xl mt-8 mb-4">6. Links</h2>
          <p>
            Spectral Store has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Spectral Store of the site. Use of any such linked website is at the user's own risk.
          </p>

          <h2 className="font-creepster text-2xl mt-8 mb-4">7. Modifications</h2>
          <p>
            Spectral Store may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
          </p>

          <h2 className="font-creepster text-2xl mt-8 mb-4">8. Governing Law</h2>
          <p>
            These terms and conditions are governed by and construed in accordance with the laws and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
