import React, { useState } from 'react';
import '../App.css';

const colorData = [
    { color: "red", value: "#f00" },
    { color: "green", value: "#0f0" },
	{ color: "blue", value: "#00f" },
	{ color: "cyan", value: "#0ff" },
	{ color: "magenta",	value: "#f0f" },
    { color: "yellow", value: "#ff0" },
	{ color: "black", value: "#000" } 
];

function SearchPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const filteredColors = colorData.filter(color =>
        color.color.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="search-page">
            <input
                type="text"
                placeholder="Search colors..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
            />
            <div className="color-grid">
                {filteredColors.map((color, index) => (
                    <div key={index} className="color-card" style={{ backgroundColor: color.value }}>
                        <span>{color.color}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SearchPage;
