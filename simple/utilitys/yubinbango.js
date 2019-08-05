const getAdress = (zipCode) =>
  new Promise((resolve) => {
    // eslint-disable-next-line no-new, no-undef
    new YubinBango.Core(zipCode, function(addr) {
      resolve(
        addr.street !== ''
          ? [
              true,
              {
                location: addr.region,
                address1: addr.locality,
                address2: addr.street
              }
            ]
          : [false, { errMsg: `${zipCode}に該当する住所がありません` }]
      )
    })
  })

export { getAdress }
