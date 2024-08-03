"use client"
import { useRef } from 'react';

const HomePage: React.FC = () => {
    const targetRef = useRef<HTMLDivElement>(null);

    const scrollToSection = () => {
        const currentElement = targetRef.current;
        if (currentElement) {
            currentElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div>
            {/* Other content */}

            <button onClick={scrollToSection}>
                Go to Target Section
            </button>

            {/* Other content */}

            <div ref={targetRef} style={{ marginTop: '1000px' }}>
                <h2>Target Section</h2>
                <p>This is the section you want to scroll to.</p>
            </div>

            {/* Other content */}
        </div>
    );
};

export default HomePage;
