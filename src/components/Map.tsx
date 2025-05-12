
import { MapPin } from "lucide-react";

export function Map() {
  return (
    <div className="relative rounded-lg overflow-hidden border border-halloween-purple/20 shadow-lg">
      <div className="aspect-[16/9] bg-muted">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109742.54982301397!2d29.860550921363143!3d31.224034886676605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c49126710fd3%3A0xb4e0cda629ee6bb9!2sAlexandria%2C%20Alexandria%20Governorate%2C%20Egypt!5e0!3m2!1sen!2sus!4v1715442014519!5m2!1sen!2sus" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={false} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Alexandria Map"
          className="w-full h-full"
        />
      </div>
      <div className="absolute top-4 left-4 bg-card p-3 rounded-lg shadow flex items-center space-x-2 border border-halloween-purple/30">
        <MapPin className="h-5 w-5 text-halloween-purple" />
        <div className="text-sm font-medium">Alexandria, Egypt</div>
      </div>
    </div>
  );
}
