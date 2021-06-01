export const checkValidInput = (total: string): string => {
  const result: any = total.match(
    new RegExp('(\\-?[\\d]{1,3})(X|\\-|\\+|\\/|\\=)?(\\-?[\\d]{1,3})?')
  );
  if (result[2] === undefined) {
    if (result[1] === undefined) {
        
      return '';
    }

    return result[1];
  }
  if (result[3] === undefined) {

    return result[1] + result[2];
  }

  return result[1] + result[2] + result[3];
};
