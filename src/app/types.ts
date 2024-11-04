// types.ts
export interface Contact {
    email: string;
    phone: string;
    location: string;
  }
  
  export interface Experience {
    title: string;
    company: string;
    location: string;
    dates: string;
    description: string;
  }
  
  export interface Education {
    degree: string;
    institution: string;
    location: string;
    dates: string;
  }
  
  export interface ResumeData {
    name: string;
    title: string;
    contact: Contact;
    summary: string;
    experience: Experience[];
    education: Education[];
    skills: string[];
  }

  