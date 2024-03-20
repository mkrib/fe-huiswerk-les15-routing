function ConvertToShortDate(longDate) {
    const shortDate = new Date(longDate);
    const longOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };
    return (
        shortDate.toLocaleDateString('nl-NL',longOptions)
    );
}

export default ConvertToShortDate;