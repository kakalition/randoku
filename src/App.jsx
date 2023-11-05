import { useMemo, useState } from "react";

const questions = [
  "Siapa seseorang yang saat ini sedang kamu taksir?",
  "Dari beberapa teman dekatmu, siapa yang paling bisa menarik perhatianmu?",
  "Apa yang membuatmu tertarik kepada seseorang?",
  "Apa trauma terbesarmu dalam hal percintaan?",
  "Pernah gagal move on? Kalau iya, sampai kapan?",
  "Siapa orang yang yang saat ini selalu ada dalam pikiranmu?",
  "Berapa mantan pacar kamu saat ini?",
  "Apa kamu pernah mendekati seseorang saat sedang mendekati orang lain?",
  "Bagaimana kamu memandang hubungan percintaan dengan lawan jenis?",
  "Apa kenangan terindahmu bersama mantan?",
  "Bagaimana reaksimu jika orang yang kamu sukai ternyata menjalani hubungan dengan orang lain?",
  "Kapan terakhir kali kamu nangis karena pacar atau gebetan?",
  "Apa teks terakhir yang kamu kirim ke pacar / mantan pacar / gebetan?",
  "Bagaimana pendapatmu mengenai kesempatan kedua?",
  "Apa hal terberat yang pernah kamu lalui?",
  "Apa hal yang membuatmu bangga terhadap diri sendiri?",
  "Apa hal yang membuatmu tidak percaya diri?",
  "Siapa orang yang kamu anggap sebagai teman terbaik?",
  "Apa kebohongan terbesar yang pernah kamu katakan kepada orang tua?",
  "Apa pengalaman seru yang pernah kamu lalui?",
  "Bagaimana kamu mengartikan hidupmu?",
  "Apa impian terbesarmu?",
  "Adakah yang ingin kamu tunjukan kepada orang terdekatmu?",
  "Apa cerita masa kecilmu yang paling lucu?",
  "Bagaimana cara kamu dalam menghadapi orang yang mengusikmu?",
  "Apa hal terburuk yang pernah kamu lakukan?",
  "Apa penyesalan terbesarmu?",
  "Siapa orang yang tidak ingin kamu lupakan?",
  "Apa kamu rela menghabiskan uang untuk membiayai hobimu?",
  "Bagaimana kamu menjaga kepercayaan dari seseorang?",
  "Siapa teman terbaikmu?",
  "Siapa temanmu yang paling menjengkelkan?",
  "Apa pengalaman tak terlupakan yang pernah kamu lalui bersama temanmu?",
  "Apakah teman-temanmu saat ini adalah teman terbaik yang kamu miliki?",
  "Apa kamu pernah terpikir untuk menjadikan teman lawan jenismu sebagai pacar?",
  "Apa hal yang ingin kamu pertahankan dari pertemananmu saat ini?",
  "Apa kesan pertama yang terlintas saat kamu bertemu dengan kami semua?",
  "Bagaimana kamu menceritakan kepada orang lain tentang kami?",
  "Apa kamu pernah dikhianati oleh sahabatmu?",
  "Apa hal yang ingin kamu lakukan bersama teman-temanmu?",
  "Apa rahasia yang kamu sembunyikan dari temanmu?",
  "Siapa di antara kami semua yang pernah membuatmu kesal?",
  "Siapa di antara kami semua yang paling tidak kamu sukai?",
  "Tunjukkan chat terakhir kamu kepada pasangan / gebetan.",
  "Telepon temanmu secara acak lalu katakan, “ada yang bisa kami bantu?”.",
  "Selfie lalu upload di Instastory kamu dengan gaya paling jelek yang bisa kamu lakukan.",
  "Tepuk pundak orang yang lewat secara acak, lalu katakan, “Hai, bro!”.",
  "Minta foto ke orang yang kamu temui di jalan.",
  "Relakan wajahmu untuk dirias secara acak.",
  "Berdiri di luar lalu sapa semua orang yang kamu lihat.",
  "Tunjukkan history pencarian kamu di media sosial.",
  "Kembali melanjutkan permainan sambil jongkok sampai ada orang lain yang kalah.",
  "Buat Instastory menggunakan filter yang paling tidak kamu sukai.",
  "Upload salah satu foto yang paling kamu sukai dari gebetanmu.",
  "Jilat sikumu tanpa bantuan dari tangan lainnya.",
  "Keluarkan semua isi tas dan dompetmu.",
  "Makan camilan tanpa menggunakan tangan.",
  "Bagaimana kabarmu hari ini?",
  "Apa yang sedang kamu pikirkan saat ini?",
  "Apa yang sedang kamu kerjakan akhir-akhir ini?",
  "Bagaimana perasaanmu saat ini?",
  "Apa yang membuatmu tertawa belakangan ini?",
  "Apa hal yang paling kamu nikmati dalam hidup saat ini?",
  "Apa yang sedang kamu rencanakan untuk masa depan?",
  "Apa sajakah hobimu yang baru-baru ini kamu temukan?",
  "Apa yang paling menginspirasi kamu akhir-akhir ini?",
  "Bagaimana cara kamu mengatasi stres?",
  "Apa kegiatan favoritmu di akhir pekan?",
  "Apa lagu atau artis musik favoritmu saat ini?",
  "Apa film atau acara TV terakhir yang kamu tonton?",
  "Apa buku yang baru-baru ini kamu baca?",
  "Apa yang sedang kamu pelajari atau eksplorasi saat ini?",
  "Apa yang membuatmu merasa bersyukur?",
  "Apa hal yang paling kamu rindukan selama pandemi?",
  "Apa rencana perjalanan atau liburan impianmu?",
  "Apa makanan atau hidangan favoritmu?",
  "Apa hobi atau aktivitas yang ingin kamu coba dalam waktu dekat?",
  "Apa yang kamu pikirkan tentang situasi politik saat ini?",
  "Apa pencapaian terbesarmu tahun ini?",
  "Apa momen yang paling menyenangkan dalam hidupmu?",
  "Apa kejadian lucu yang pernah kamu alami?",
  "Apa tindakan kecil yang dapat membuatmu bahagia?",
  "Apa yang kamu harapkan dari tahun depan?",
  "Apa impian terbesarmu dalam hidup?",
  "Apa yang kamu pelajari dari pengalaman pahit dalam hidupmu?",
  "Apa kutipan atau kata-kata bijak yang kamu temukan inspiratif?",
  "Apa yang kamu pikirkan tentang teknologi terkini?",
  "Apa hubungan penting dalam hidupmu yang ingin kamu perbaiki?",
  "Apa kebaikan yang bisa kamu lakukan hari ini?",
  "Apa hal yang ingin kamu pelajari lebih dalam?",
  "Apa hobi atau minatmu yang tidak banyak orang tahu?",
  "Apa hal yang ingin kamu lakukan sebelum berusia 40 tahun?",
  "Apa pengalaman perjalanan terbaik yang pernah kamu alami?",
  "Apa yang membuatmu merasa terpenuhi dalam pekerjaanmu?",
  "Apa yang kamu cari dalam sebuah hubungan?",
  "Apa kejutan terbesar yang pernah kamu alami?",
  "Apa hal yang selalu bisa membuatmu tersenyum?",
  "Apa yang kamu pikirkan tentang lingkungan dan keberlanjutan?",
  "Apa yang kamu lakukan untuk merayakan keberhasilan kecil dalam hidupmu?",
  "Apa kegiatan yang selalu kamu inginkan untuk lakukan bersama?",
  "Apa yang kamu pikirkan tentang perkembangan teknologi medis?",
  "Apa hal yang selalu membuatmu merasa tenang?",
  "Apa yang ingin kamu ubah dalam hidupmu jika kamu punya kesempatan?",
  "Apa yang kamu harapkan untuk mencapai dalam 5 tahun ke depan?",
  "Apa yang membuatmu merasa hidup?",
  "Apa yang kamu anggap sebagai kualitas sahabat yang baik?",
  "Apa yang ingin kamu sampaikan kepada teman-teman kita yang lain?",
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [touchable, setTouchable] = useState(true);

  const actionOnClickHandler = async () => {
    setTouchable(false);

    for (let i = 1; i <= 20; i++) {
      setTimeout(() => {
        const index = Math.floor(Math.random() * questions.length);
        setCurrentQuestion([index + 1, questions[index]]);
      }, 100 * i);
    }

    setTouchable(true);
  };

  const cardElement = useMemo(() => {
    return (
      <div
        className="bg-[#FAFAFA] rounded-lg p-4 min-h-[50%] w-[80%] flex flex-col items-center justify-between select-none cursor-pointer"
        onClick={touchable ? actionOnClickHandler : null}
      >
        <p className="font-roboto-flex text-[#202020] w-full text-left font-medium text-xl">
          {currentQuestion?.[0] ?? ""}
        </p>

        <p className="font-roboto-flex text-2xl text-[#202020] font-medium mx-4">
          {currentQuestion?.[1] ?? ""}
        </p>

        <p className="font-roboto-flex text-[#202020] w-full text-right font-medium text-xl">
          {currentQuestion?.[0] ?? ""}
        </p>
      </div>
    );
  }, [currentQuestion, touchable]);

  const initActionElement = (
    <button
      type="button"
      className="font-poppins text-2xl text-white font-bold select-none cursor-pointer"
      onClick={actionOnClickHandler}
    >
      {"TAP UNTUK MULAI"}
    </button>
  );

  return (
    <div className="bg-[#202020] w-full h-screen flex flex-col items-center p-8 justify-between">
      <h1 className="font-poppins text-2xl text-white font-light select-none">
        RANDOKU
      </h1>
      {!currentQuestion ? initActionElement : cardElement}
      <h2 className="font-poppins text-xl text-white font-light select-none">
        BESTIE EDITION
      </h2>
    </div>
  );
}

export default App;
