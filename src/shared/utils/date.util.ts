export const stringToDate = (value?: string): Date | null => {
  if (!value) return null;
  try {
    const date = new Date(value);
    if (date instanceof Date && isFinite(+date)) {
      return date;
    }
    throw Error();
  } catch (e) {
    return null;
  }
};
