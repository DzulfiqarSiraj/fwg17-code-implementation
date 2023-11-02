const voucher50 = 'FAZZFOOD50';
const voucher60 = 'DITRAKTIR60';

function FazzFood(harga, voucher, jarak, pajak){
  if(jarak < 0){
    console.log('Jarak tidak valid')
    return
  }
  if(voucher !== 'FAZZFOOD50' && voucher !== 'DITRAKTIR60'){
    console.log('Voucher tidak valid')
  }
  if(harga < 50000 && voucher === 'FAZZFOOD50'){
    console.log(`Tidak dapat menggunakan voucher "${voucher}", total belanja minimal sebesar 50000 untuk dapat menggunakan voucher ini`);
  } else if(harga < 25000 && voucher === 'DITRAKTIR60'){
    console.log(`Tidak dapat menggunakan voucher "${voucher}", total belanja minimal sebesar 25000 untuk dapat menggunakan voucher ini`);
  } else if((harga >= 50000 && (voucher === 'FAZZFOOD50' || voucher === 'DITRAKTIR60')) || (harga < 50000 && harga >= 25000 && voucher === 'DITRAKTIR60')){
    console.log(`Berhasil menggunakan voucher "${voucher}"`)
  }

  let discount = 0
  let biayaSetelahDiscount = harga
  let hargaSetelahPajak = 0;
  let ongkir = 5000

  // Kalkulasi harga discount
  if(voucher === 'FAZZFOOD50' && harga >= 50000){
    discount = harga * 0.5;
    biayaSetelahDiscount = harga - discount
    if(discount > 50000){
      biayaSetelahDiscount = harga - 50000;
    }
  } else if(voucher === 'DITRAKTIR60' && harga >= 25000){
    discount = harga * 0.6;
    biayaSetelahDiscount = harga - discount
    if(discount > 30000){
      biayaSetelahDiscount = harga - 30000;
    }
  }
    
  // Kalkulasi pajak
  if(pajak){
    hargaSetelahPajak = harga * 0.05;
  }

  // Kalkulasi ongkir
  if(jarak > 2){
    ongkir += (3000 * (jarak - 2));
  }

  // Kalkulasi sub-total
  const subTotal = biayaSetelahDiscount + ongkir + hargaSetelahPajak;

  console.log(`-----------------------------------
  Biaya = ${harga}
  Discount = ${discount}
  Biaya Pengiriman = ${ongkir}
  Pajak = ${hargaSetelahPajak}
-----------------------------------
  sub-Total = ${subTotal}
-----------------------------------`)
}

FazzFood(75000, voucher50, 5, true)