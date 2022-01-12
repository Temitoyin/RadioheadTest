import dynamic from 'next/dynamic';

// Dynamically load icons.
const IconComponent = dynamic(() => import('./icon'));

export default IconComponent;
