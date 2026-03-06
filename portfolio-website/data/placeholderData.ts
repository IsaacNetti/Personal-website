import { Project, Experience, Education, ContactInfo } from '../types/types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Project One',
    description: 'A sample project description. This is a placeholder for a real project.',
    image: 'https://placehold.co/300x200',
    link: 'https://example.com/project1',
  },
  {
    id: '2',
    title: 'Project Two',
    description: 'Another sample project. Placeholder content for demonstration.',
    image: 'https://placehold.co/300x200',
    link: 'https://example.com/project2',
  },
  {
    id: '3',
    title: 'Project Three',
    description: 'Third project example. Using placeholder data as requested.',
    image: 'https://placehold.co/300x200',
    link: 'https://example.com/project3',
  },
];

export const experiences: Experience[] = [
  {
    id: '1',
    title: 'Software Developer',
    company: 'Tech Company Inc.',
    period: '2020 - Present',
    description: 'Developed web applications using React and Node.js. Led a team of 5 developers.',
  },
  {
    id: '2',
    title: 'Junior Developer',
    company: 'Startup XYZ',
    period: '2018 - 2020',
    description: 'Built responsive websites and maintained legacy codebases.',
  },
];

export const educations: Education[] = [
  {
    id: '1',
    degree: 'Bachelor of Science in Computer Science',
    institution: 'University of Example',
    year: '2018',
  },
];

export const contactInfo: ContactInfo = {
  name: 'John Doe',
  phone: '+1 (555) 123-4567',
  email: 'john.doe@example.com',
  github: 'https://github.com/johndoe',
  linkedin: 'https://linkedin.com/in/johndoe',
};

export const bio = 'I am a passionate software developer with experience in web development, focusing on creating clean, efficient, and user-friendly applications. I enjoy working with modern technologies and solving complex problems.';