const formatMoney = (amount) => {
  const options = {
    style: 'currency',
    currency: 'MXN',
    minimumFractionDigits: 2,
  };

  if (amount % 100 === 0) {
    options.minimumFractionDigits = 0;
  }

  const formatter = new Intl.NumberFormat('es-MX', options);

  return formatter.format(amount / 100);
};

export default formatMoney;
