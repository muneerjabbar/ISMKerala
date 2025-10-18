# ISM Kerala Website

A comprehensive static website for ISM Kerala (Islamic Students Movement Kerala), the youth wing of Kerala Nadvathul Mujahideen.

## Features

- **Responsive Design**: Mobile-friendly design that works on all devices
- **Bilingual Support**: English and Malayalam language switching
- **Image Carousel**: Auto-rotating carousel with 2-second intervals
- **Multiple Sections**: About, Future Programs, Activities, State Committee, Districts, Contact
- **District Navigation**: Interactive Kerala map with district-wise navigation
- **Activity Pages**: Individual pages for each activity (QHLS, Velicham, Dawah, Eelaf, Vichinthanam, Inspire)
- **Future Programs**: Auto-expiring program sections based on dates
- **State Committee**: Photo gallery of committee members with designations

## Project Structure

```
ISMKerala/
├── index.html                 # Main homepage
├── about/
│   └── index.html            # About page
├── futurepgm/
│   └── index.html            # Future programs page
├── qhls/
│   └── index.html            # QHLS activity page
├── velicham/
│   └── index.html            # Velicham activity page
├── dawah/
│   └── index.html            # Dawah activity page
├── eelaf/
│   └── index.html            # Eelaf activity page
├── vichinthanam/
│   └── index.html            # Vichinthanam activity page
├── inspire/
│   └── index.html            # Inspire activity page
├── thrissur/
│   └── index.html            # Sample district page
├── assets/
│   ├── css/
│   │   └── style.css         # Main stylesheet
│   ├── js/
│   │   └── script.js         # JavaScript functionality
│   └── images/
│       ├── carousel/         # Carousel images
│       ├── committee/        # Committee member photos
│       └── activities/       # Activity images
└── README.md
```

## Setup Instructions

1. **Add Images**: Place your images in the respective folders:
   - Carousel images: `assets/images/carousel/`
   - Committee photos: `assets/images/committee/`
   - Activity images: `assets/images/activities/`
   - Logo: `assets/images/logo.png`

2. **Update Content**: Modify the content in HTML files to match your specific information:
   - Committee member names and photos
   - Contact information
   - Program details
   - District information

3. **Configure Future Programs**: Update the expiry date in `assets/js/script.js`:
   ```javascript
   const programDate = '2024-03-17'; // Set your expiry date here
   ```

4. **Customize District Map**: Update the SVG map in `index.html` to match your district boundaries and add click handlers for each district.

## Features Details

### Language Switching
- Toggle between English and Malayalam
- Language preference is saved in localStorage
- All text content supports both languages

### Carousel
- Auto-advances every 2 seconds
- Manual navigation with arrows and dots
- Responsive design for all screen sizes

### Future Programs
- Automatically hides expired programs
- Configurable expiry dates
- Registration forms included

### District Navigation
- Interactive SVG map of Kerala
- 16 districts including Malappuram East/West and Calicut North/South
- Click to navigate to district pages

### State Committee
- Photo gallery with designations
- Support for multiple Vice Presidents, Joint Secretaries, and Secretariat Members
- Responsive grid layout

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Technologies Used

- HTML5
- CSS3 (with Flexbox and Grid)
- JavaScript (ES6+)
- Font Awesome icons
- Google Fonts (Poppins)

## Customization

### Colors
The main color scheme can be customized by updating the CSS variables in `assets/css/style.css`:
- Primary: #2c5aa0
- Secondary: #4a90e2
- Accent: Various shades

### Fonts
The website uses Poppins font family. To change fonts, update the Google Fonts link in the HTML files and the font-family declarations in CSS.

### Layout
The website uses CSS Grid and Flexbox for responsive layouts. All sections are designed to be easily customizable.

## Contact

For any questions or support regarding this website, please contact the ISM Kerala team.

---

© 2024 ISM Kerala. All rights reserved.
