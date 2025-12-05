import admissionImage from '../assets/admission.png';
import directorImage from '../assets/director.png';
import hof1 from '../assets/Hof1.png';
import hof2 from '../assets/Hof2.png';
import hof3 from '../assets/Hof3.png';
import hof4 from '../assets/Hof4.png';

export const IMAGES = {
  logo: "image_f6a565.png",
  // logo: "https://cdn-icons-png.flaticon.com/512/3665/3665939.png", // Fallback
  
  classroom: "image_f6a585.jpg",
  // classroom: "https://images.unsplash.com/photo-1577896334614-201b31d50dc5?auto=format&fit=crop&q=80&w=1920", // Fallback
  
  director: directorImage,
  // director: "https://images.unsplash.com/photo-1524178232363-1fb2b075b955?auto=format&fit=crop&q=80&w=1000", // Fallback
  
  admission: admissionImage,
  // admission: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1000", // Fallback
  
  results: [
    hof1,
    hof2,
    hof3,
    hof4
  ]
};
