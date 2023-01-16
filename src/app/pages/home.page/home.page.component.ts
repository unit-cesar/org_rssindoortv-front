import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-home.page',
  templateUrl: './home.page.component.html',
  styleUrls: ['./home.page.component.scss']
})
export class HomePageComponent {

  // contact_email = 'vendas@rssindoortv.org';
  contact_support = 'suporte@rssindoortv.org';

  h_nav1 = 'ENTRAR';
  h_path_logo_top = ['../../../assets/img/logo-top.png', 'rssIndoorTv.org top logo'];
  h_path_logo = ['../../../assets/img/logo.png', 'rssIndoorTv.org logo'];
  h_description = 'Conteúdo publicitário do seu negócio em sua TV';
  h_app_title = 'TESTE GRATUITAMENTE';
  h_app_txts = ['Instale o nosso APP Android', 'em sua TV Smart ou em sua TV Box.'];
  h_app_path_playstore = ['../../../assets/img/play-store.png', 'baixar app na play store'];

  s_tmpl_title = 'DIVULGUE SOMENTE O QUE DESEJAR';
  s_tmpl_sub_title = 'Entretendo o público presente no estabelecimento, divulgue:';
  s_tmpl_tmpls = ['Produtos', 'Serviços', 'Promoções', 'Curiosidades', 'Informativos', 'Posts Recentes do Instagram', 'Vídeos do YouTube', 'Diversas Fontes de Notícias', 'Clima da sua Cidade', 'Cotações Financeiras', 'Resultados de Loterias', 'Memes Engraçados', 'Trailers de Filmes', 'Notícias de Times de Futebol'];
  s_tmpl_txt = '...e muito mais, confira!';
  s_tmpl_carousel = '../../../assets/img/loteria.jpg';
  s_tmpl_path_img1 = ['../../../assets/img/monitor1.jpg', 'tv com suporte de parede'];

  s_hands_title = 'FORTALEÇA OS LAÇOS';
  s_hands_txt = 'Divulgue mídias sociais dos seus clientes e parceiros em sua TV.';
  s_hands_path_img1 = ['../../../assets/img/hands.jpg', 'aperto de mãos'];

  s_ctrl_title = 'TENHA CONTROLE TOTAL';
  s_ctrl_txts = ['Praticidade, gerencie tudo ou conte com nosso suporte.', 'Player com opção de fundo musical personalizado.', 'Conteúdo dinâmico e auto-atualizado.', 'Escolha entre diversas opções de fontes de notícias.'];
  s_ctrl_path_img1 = ['../../../assets/img/ctrl.jpg', 'pessoa manipulando engrenagens'];
  s_ctrl_carousel = '../../../assets/img/bbc.jpg';

  s_invest_title = 'INVESTIMENTO';
  s_invest_txt = 'R$ 120,00 mensais por Player';
  s_invest_path_img1 = ['../../../assets/img/monitor2.jpg', 'tvs com caixa de suporte'];

  s_contact_title = 'FALE CONOSCO';
  s_contact_whatsapp = ['../../../assets/img/whatsapp.png', 'icone do whatsapp', 'https://api.whatsapp.com/send?phone=55085985970703'];
  s_contact_telegram = ['../../../assets/img/telegram.png', 'icone do telegram', 'https://t.me/rssIndoorTv'];


  page_footer_txts = ['@ ' + new Date().getFullYear() + ' rssIndoorTv.org', 'Política de Privacidade e Termos de Uso', 'mailto:' + this.contact_support];


  constructor(
    @Inject(DOCUMENT) private document: Document
  ) { }

  goToUrl(target: string): void {
    if (target == 'login') {
      this.document.location.href = 'https://rssindoortv.org/api-sisRSS/admin/';
    }

    if (target == 'playstore') {
      // this.document.location.href = 'https://rssindoortv.org/api-sisRSS/admin/';
    }

  }


}
