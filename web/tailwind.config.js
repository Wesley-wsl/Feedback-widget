module.exports = {
    content: ["./index.html", "./src/**/*.{ts,tsx}"],
    theme: {
        extend: {
            colors: {
                brand: {
                    300: "#996DFF",
                    500: "#8257e6",
                },
            },
            borderRadius: {
                md: "4px"
            }
        },
    },
    plugins: [
        require("@tailwindcss/forms"),
        require("tailwind-scrollbar"),
    ],
};
