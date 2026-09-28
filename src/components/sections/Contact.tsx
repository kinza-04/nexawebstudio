import { useState } from 'react';
import { Button } from '../ui/Button';

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    
    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/kinzamurtaza496@gmail.com", {
        method: "POST",
        body: formData
      });
      
      if (response.ok) {
        setStatus('success');
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 bg-black text-white">
      <div className="container mx-auto px-6 max-w-2xl">
        <h2 className="text-4xl font-bold mb-8">Let's Connect</h2>
        
        {status === 'success' && (
          <div className="p-8 bg-neutral-900 border border-neutral-800 rounded-2xl text-center">
            <h3 className="text-2xl font-bold mb-2">Thank you!</h3>
            <p className="text-neutral-400">Your project request has been sent successfully. Our Nexa team will get back to you shortly.</p>
          </div>
        )}
        
        {status === 'error' && (
          <div className="p-8 bg-neutral-900 border border-neutral-800 rounded-2xl text-center">
            <h3 className="text-2xl font-bold mb-2">Something went wrong.</h3>
            <p className="text-neutral-400">Please try again or contact us directly.</p>
          </div>
        )}

        {(status === 'idle' || status === 'loading') && (
          <form onSubmit={handleSubmit} className="space-y-6">
            <input type="hidden" name="_subject" value="New Project Request" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input name="name" type="text" placeholder="Full Name" className="w-full p-4 bg-neutral-900 rounded-lg border border-neutral-800" required />
                <input name="email" type="email" placeholder="Email" className="w-full p-4 bg-neutral-900 rounded-lg border border-neutral-800" required />
                <input name="phone" type="tel" placeholder="Phone Number" className="w-full p-4 bg-neutral-900 rounded-lg border border-neutral-800" />
                <input name="company" type="text" placeholder="Company / Brand" className="w-full p-4 bg-neutral-900 rounded-lg border border-neutral-800" />
            </div>

            <select name="projectType" defaultValue="" className="w-full p-4 bg-neutral-900 rounded-lg border border-neutral-800 text-neutral-400" required>
                <option value="" disabled>Project Type</option>
                <option value="Website">Website</option>
                <option value="Web Application">Web Application</option>
                <option value="E-Commerce">E-Commerce</option>
                <option value="UI/UX Design">UI/UX Design</option>
                <option value="Branding">Branding</option>
                <option value="SEO">SEO</option>
                <option value="Other">Other</option>
            </select>

            <input name="budget" type="text" placeholder="Your Budget" className="w-full p-4 bg-neutral-900 rounded-lg border border-neutral-800" required />

            <textarea name="details" placeholder="Project Details" className="w-full p-4 bg-neutral-900 rounded-lg border border-neutral-800 h-32" required></textarea>
            
            <Button type="submit" disabled={status === 'loading'}>
              {status === 'loading' ? 'Sending...' : 'Send Project Request'}
            </Button>
          </form>
        )}
      </div>
    </section>
  );
}
