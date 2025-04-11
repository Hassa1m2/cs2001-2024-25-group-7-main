/**
 * parseToDate
 * 
 * Converts a date string in "DD/MM/YYYY" format to a JavaScript Date object.
 * 
 * @param {string} dateString - The date string in "DD/MM/YYYY" format.
 * @returns {Date|null} - A JavaScript Date object, or null if the input is invalid.
 */
export const parseToDate = (dateString) => {
    if (!dateString) return null;
    const [day, month, year] = dateString.split('/');
    return new Date(`${year}-${month}-${day}`);
};

/**
 * formatDate
 * 
 * Converts a JavaScript Date object or an ISO date string to a string in "DD/MM/YYYY" format.
 * 
 * @param {Date|string} date - The JavaScript Date object or ISO date string to format.
 * @returns {string} - The formatted date string.
 */
export const formatDate = (date) => {
    if (!date) return '';
    if (typeof date === 'string') {
        date = new Date(date); // Parse ISO string to Date
    }
    if (!(date instanceof Date) || isNaN(date.getTime())) {
        return ''; // Return empty string for invalid Date
    }
    return date.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    });
};
