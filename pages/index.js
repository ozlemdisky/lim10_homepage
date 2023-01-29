import Image from "next/image";
import TwitterLogo from "../public/images/tw-logo.svg";

export default function Home() {
  return (
    <div className="min-h-screen grid grid-cols-12 ">
      <div className="col-span-9 relative">
        <Image
          layout="fill"
          src="/images/lim10.jpg"
          alt="lim10"
          className="object-cover opacity-98"
        />

        <h1 className="imagetext ">
          <div>
            <b>Çok Yakında</b>
            <hr />
            <b className="text-xl">birlikte çalışmak dileği ile</b>
          </div>
        </h1>

        <div className="p">
          <Image
            layout="fill"
            src="/images/logo.png"
            className="0bject-scale-down  "
          />
        </div>
      </div>

      <div className="bg-primary-500 col-span-3 flex items-center">
        <div className="title-container">
          <p className="aside-title">
            Bu süreçte aşağıdaki iletişim bilgilerinden bize ulaşabilirsiniz.
          </p>
          <p className="aside-text">
            İstanbul:Halil Rıfat Paşa Mah. Perpa Tic Merkz A Blok Kat:11 No:1333
            Şişli/İstanbul
          </p>
          <p className="aside-text">Tel:0212 909 45 16</p>
          <p className="aside-text">
            Bursa:19 Mayıs Mah., Uğur Mumcu Blv, No: 21/D, Nilüfer/Bursa
          </p>
          <p className="aside-text">Tel:0224 909 81 39</p>
          <p className="aside-text">Mail:info@lim10medya.com.tr</p>
          <div>
            <a href="https://twitter.com/">
              <TwitterLogo className="w-6 h-6 text-white" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
