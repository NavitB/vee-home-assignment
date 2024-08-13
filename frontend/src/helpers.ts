export const createFormattedDate = (timestamp: string | undefined): string => {
    try {
      const date = new Date(Number(timestamp));
        if (isNaN(date.getTime())) {
        throw new Error('Invalid date');
      }
  
      const formattedDate = date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long', // Full month name
        day: 'numeric',
      });
  
      return formattedDate;
    } catch (error) {
      console.error('Error formatting date:', error);
      return 'Invalid date';
    }
  };