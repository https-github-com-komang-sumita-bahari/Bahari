import { createStackNavigator } from 'react-navigation';

import LoginScreen from './screen/Login';
import DaftarScreen from './screen/Daftar';
import CekJadwalScreen from './screen/CekJadwal';

import lupaPassword from './screen/lupaPassword';
import PesanTiket from './screen/PesanTiket';
import PesananSaya from './screen/PesananSaya';
import home from './screen/home';
import Akun from './screen/Akun';
import test from './screen/test';
import raw from './screen/raw';
import testing from './screen/testing';
import kamera from './screen/kamera';
import Pesan from './screen/Pesan';
import DetailPesanan from './screen/DetailPesanan';
import PopUp from './screen/PopUp';
import segement from './screen/segement';
import pilihJadwal from './screen/pilihJadwal';
import percobaan from './screen/percobaan';
import Percobaan2 from './screen/Percobaan2';
import DataPenumpang from './screen/DataPenumpang';
import DetailPenumpang from './screen/DetailPenumpang';
import PilihBank from './screen/PilihBank';
import Transfer from './screen/Transfer';
import Transfer2 from './screen/Transfer2';
import Upload from './screen/Upload';
import RiwayatPesanan from './screen/RiwayatPesanan';
import MetodePembayaran from './screen/MetodePembayaran';
import Rincian from './screen/Rincian';
import trial from './screen/trial';
import trial2 from './screen/trial2';

import Transfer_Bank from './screen/Transfer_Bank';
import InputPesanan from './screen/InputPesanan';
import point from './screen/point';
import detail_Pesanan from './screen/detail_Pesanan';
import Pesanan from './screen/Pesanan';
import PesananSedangDiProses from './screen/PesananSedangDiProses';
import Detail_Promo from './screen/Detail_Promo';
import Detail_kupon from './screen/Detail_kupon';
import semua_promo from './screen/semua_promo';
import seat from './screen/seat';
import seatPP from './screen/seatPP';
import semua_kuponcabang from './screen/semua_kuponcabang';
import kupon_percabang from './screen/kupon_percabang';
import kupon_saya from './tabscreen/kupon_saya';
import TampilJadwal from './screen/TampilJadwal';
import detail_eTiket from './screen/detail_eTiket';
import inbox from './screen/inbox';
import UbahPassword from './screen/UbahPassword';
import SplashScreen from './screen/SplashScreen';
import refund from './screen/refund';
import settings from './screen/settings';
import SyaratKetentuan from './screen/SyaratKetentuan';
import KebijakanPrivasi from './screen/KebijakanPrivasi';
import DataPribadi from './screen/DataPribadi';
import SlideTutorial from './screen/slide_tutorial';

export default createStackNavigator(
    {	
        
        SplashScreen:SplashScreen,
        SlideTutorial: SlideTutorial,
        settings:settings,
        DataPribadi:DataPribadi,
        inbox:inbox,
        SyaratKetentuan:SyaratKetentuan,
        KebijakanPrivasi:KebijakanPrivasi,
        refund:refund,
        UbahPassword:UbahPassword,
        TampilJadwal:TampilJadwal,
        detail_eTiket:detail_eTiket,
        Login: LoginScreen,
        semua_kuponcabang:semua_kuponcabang,
        kupon_percabang:kupon_percabang,
        seat:seat,
        seatPP:seatPP,
        kupon_saya:kupon_saya,
        semua_promo:semua_promo,
        Detail_Promo:Detail_Promo,
        Detail_kupon:Detail_kupon,
        PesananSedangDiProses:PesananSedangDiProses,
        point:point,
        detail_Pesanan:detail_Pesanan,
        Pesanan:Pesanan,
        InputPesanan:InputPesanan,
        Transfer_Bank:Transfer_Bank,
        home: home, 
        Rincian:Rincian,
        trial:trial,
        trial2:trial2,        
        RiwayatPesanan:RiwayatPesanan,
        Cek_Jadwal: CekJadwalScreen,
        Login: LoginScreen,
        Transfer:Transfer,
        Transfer2:Transfer2,
        PilihBank:PilihBank,
        test:test,
        MetodePembayaran:MetodePembayaran,
        Upload:Upload,
        percobaan:percobaan,
        Percobaan2:Percobaan2,
        DataPenumpang: DataPenumpang,
        segement:segement,
        PopUp:PopUp,
        Login: LoginScreen,
        Login: LoginScreen, 
        testing: testing,
        Pesan: Pesan,
        pilihJadwal: pilihJadwal,
        testing: testing,
        raw: raw,
        DetailPesanan: DetailPesanan,
        kamera: kamera,
        DetailPenumpang:DetailPenumpang,
        kamera: kamera,
        test:test,
        Akun: Akun,
    	PesanTiket: PesanTiket,
    	PesananSaya : PesananSaya,
        lupaPassword:lupaPassword,
        Daftar: DaftarScreen,
        
    },


);