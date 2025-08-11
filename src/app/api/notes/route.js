export async function GET() {
    const notes = {
        status: "Ok",
        message: "Notes Page",
        data: [
            {
                "id": 1,
                "title": "Hari Pertama SphereDev",
                "content": "Waktu itu cuma modal ide, laptop, dan segelas kopi sachet. Aku sama tim duduk di meja panjang, ngebahas visi SphereDev sampai larut malam. Di kepala aku, SphereDev bukan cuma tentang coding, tapi tentang bikin ekosistem belajar teknologi yang bikin orang nggak cuma bisa bikin aplikasi, tapi juga ngerti kenapa aplikasi itu ada. Hari itu aku ngerasa kayak lagi mulai perjalanan panjang, dan meskipun banyak hal belum jelas, semangatnya nggak pernah segede itu sebelumnya."
            },
            {
                "id": 2,
                "title": "Ngajar di SDII Nurul Musthofa",
                "content": "Pertama kali masuk kelas, anak-anak langsung melambaikan tangan sambil teriak, 'Kak Kevin!'. Aku bawa kit robot sederhana, isinya Arduino dan beberapa motor. Awalnya aku kira mereka bakal bingung, ternyata malah langsung penasaran dan nggak sabar buat nyoba. Ada satu anak yang sampai bilang, 'Kak, aku mau jadi programmer!' cuma gara-gara berhasil bikin lampu LED nyala. Rasanya campur antara bangga dan terharu, karena aku tahu itu bibit-bibit masa depan teknologi Indonesia."
            },
            {
                "id": 3,
                "title": "Project GalonFair di Asrama",
                "content": "Masalahnya simpel: galon sering habis tiba-tiba, dan nggak ada yang tahu siapa yang ngambil terakhir. Dari situ aku mulai mikirin solusi pakai RFID, biar setiap kelas cuma bisa ambil satu galon per hari. Satu minggu kemudian, prototipe pertama sudah terpasang. Saat aku tunjukin fitur refill khusus buat bapak galon, semua orang langsung bilang, 'Ini keren banget, Kev!' Lucunya, setelah itu malah ada yang sengaja bolak-balik nge-tap kartu cuma buat lihat sistemnya jalan."
            },
            {
                "id": 4,
                "title": "Petualangan Desa Nusantara",
                "content": "Aku ingin bikin sesuatu yang menggabungkan teknologi sama budaya Indonesia. Di Roblox Studio, aku mulai membangun dunia yang penuh sawah, rumah joglo, dan pasar tradisional. Tantangannya? Bikin detail yang bener-bener mirip aslinya. Aku sampai nonton puluhan video dokumenter buat memastikan suasananya terasa otentik. Setiap kali karakter player masuk desa, mereka akan disambut suara ayam berkokok dan musik gamelan. Buat aku, ini bukan cuma game, tapi cara mengenalkan keindahan desa Nusantara ke generasi muda lewat dunia digital."
            },
            {
                "id": 5,
                "title": "Sphere Goes To School",
                "content": "Awalnya ide ini terdengar ambisius: bawa workshop coding ke sekolah-sekolah di berbagai daerah. Tapi setelah trial pertama sukses, aku makin yakin. Aku ingat banget di salah satu sekolah, listrik sempat mati di tengah sesi. Bukannya panik, anak-anak malah tetap ngumpul sambil aku jelasin konsep game development pakai papan tulis. Mereka bahkan nggak sadar waktu berlalu hampir dua jam. Di situ aku sadar, teknologi hanyalah alat — semangat belajarnya yang bikin semua itu hidup."
            },
            {
                "id": 6,
                "title": "Ngoding Sampai Subuh",
                "content": "Jam 10 malam aku mulai ngoding portfolio terminal-style pakai Next.js. Awalnya santai, sambil dengerin musik lo-fi. Tapi begitu nemu bug yang aneh, aku jadi lupa waktu. Setiap kali coba fix, malah muncul error baru. Tahu-tahu jam udah nunjukin 04:00, mata merah tapi otak masih jalan. Ketika akhirnya bug itu kelar, aku cuma bisa ketawa sendiri sambil bilang, 'Worth it.' Rasanya kayak habis menang duel panjang sama komputer."
            },
            {
                "id": 7,
                "title": "Belajar IoT Pertama Kali",
                "content": "Hari pertama megang Arduino Uno, aku cuma punya sensor ultrasonik dan kabel jumper seadanya. Project pertama: bikin sensor jarak nyala lampu LED kalau ada orang lewat. Begitu berhasil, aku nggak berhenti utak-atik, bahkan nyoba bikin versi yang bisa kirim data ke laptop. Saat itu aku nggak nyangka kalau percobaan sederhana ini bakal bikin aku jatuh cinta sama dunia IoT. Dari situ, ide-ide aneh mulai bermunculan, dari loker pintar sampai sistem distribusi galon."
            },
            {
                "id": 8,
                "title": "Pitching Ke Sekolah",
                "content": "Ngajakin sekolah kerja sama buat program SphereDev nggak semudah yang dibayangkan. Pernah sekali aku bawa presentasi yang udah rapi banget, tapi pas hari H, proyektor sekolah malah nggak nyala. Akhirnya aku presentasi cuma modal laptop dipegangin, muter slide manual. Anehnya, justru itu yang bikin kepala sekolah tertarik, karena mereka lihat langsung kalau aku bisa adaptasi cepat. Pelajaran pentingnya: yang dijual bukan cuma programnya, tapi juga kemampuan kita mengatasi masalah."
            }
        ]
    };

    return Response.json(notes);
}
