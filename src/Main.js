import React, { Component } from 'react';
import {
	Link
} from 'react-router-dom';

class Main extends Component {
  render() {
    return (
     <main>
       <p>Date:11/18/2020</p>
     <ol>
     <li>
     <Link className="title" exact to="/Blog1">Sankrati</Link>
     <p className="title"></p>
     <img src={process.env.PUBLIC_URL + '/kitesss.jpg' } alt="Indian Festivals"  />
     <p>Makar Sankranti is celebrated on a fixed date that is 14 January every year. 
       It also marks the termination of the Winter season and the beginning of a new harvest season. 
       It is dedicated to Lord Sun. It also refers to a specific solar day in the Hindu calendar. 
       On this auspicious day, the sun enters the zodiac sign of Capricorn or Makar which marks the end of winter month and start of longer days. 
       This is the beginning of the month of Magh. To recompense for the distinction that happens due to the revolution around the sun, every 80 years the day of Sankranti is deferred by one day. 
       From the day of Makar Sankranti, the sun begins its northward journey or Uttarayan journey. Therefore, this festival is also known as Uttarayan.
       The day is known by various names and there is a variety of different customs observed in the different Indian states.
       Despite these variations, it is a harvest and thanksgiving festival marking the start of spring, the end of the traditional farming season and the gathering of the first food from the harvest.
       It is unique among Hindu festivals as the date is based on a solar calendar rather than the phases of the moon. This means it falls on January 14th in the western calendar.
       This date marks the start of Uttarayana, the time when the sun starts to move northwards after the winter equinox.
     </p>
     </li>

     <li>
     <Link className="title" exact to="/Blog2">Holi</Link>
     <p className="title"></p>
     <img src={process.env.PUBLIC_URL + '/holi0.gif' } alt="Indian Festivals"  />
     <p> Festival of Colours, Holi is considered as one of the most revered and celebrated festivals of India and it is celebrated in almost every part of the country. 
       It is also sometimes called as the “festival of love” as on this day people get to unite together forgetting all resentments and all types of bad feeling towards each other. 
       The great Indian festival lasts for a day and a night, which starts in the evening of Purnima or the Full Moon Day in the month of Falgun. It is celebrated with the name Holika Dahan or Choti Holi on first evening of the festival and the following day is called Holi.
       In different parts of the country it is known with different names. The vibrancy of colors is something that brings in a lot of positivity in our lives and Holi being the festival of colours is actually a day worth rejoicing. 
       Holi is a famous Hindu festival that is celebrated in every part of India with utmost joy and enthusiasm. The ritual starts by lighting up the bonfire one day before the day of Holi and this process symbolizes the triumph of good over the bad.
       On the day of Holi people play with colours with their friends and families and in evening they show love and respect to their close ones with Abeer.
       Holi celebrates the arrival of spring, the end of winter, the blossoming of love, and for many it's a festive day to meet others, play and laugh, forget and forgive, and repair broken relationships. The festival also celebrates the beginning of a good spring harvest season.</p>
     </li>
     
     <li>
     <Link className="title" exact to="/Blog3">Diwali</Link>
     <p className="title"></p>
     <img src={process.env.PUBLIC_URL + '/Diyya.jpg' } alt="Diwali"  />
     <p>Diwali, or Dipawali, is India's biggest and most important holiday of the year. The festival gets its name from the row (avali) of clay lamps (deepa) that Indians light outside their homes to symbolize the inner light that protects from spiritual darkness.
        This festival is as important to Hindus as the Christmas holiday is to Christians.
        Over the centuries, Diwali has become a national festival that's also enjoyed by non-Hindu communities. For instance, in Jainism, Diwali marks the nirvana, or spiritual awakening, of Lord Mahavira on October 15, 527 B.C.; in Sikhism, it honors the day that Guru Hargobind Ji, the Sixth Sikh Guru, was freed from imprisonment. 
        Buddhists in India celebrate Diwali as well.
        Observances of Diwali differ depending on region and tradition. Among Hindus the most widespread custom is the lighting of diyas (small earthenware lamps filled with oil) on the night of the new moon to invite the presence of Lakshmi, the goddess of wealth. In Bengal the goddess Kali is worshipped. In North India the festival also celebrates the royal homecoming of Rama (along with Sita, Lakshmana, and Hanuman) to the city of Ayodhya after defeating Ravana, the 10-headed king of the demons, thus connecting the festival with the holiday of Dussehra. In South India the festival marks Krishna’s defeat of the demon Narakasura. 
        Some celebrate Diwali as a commemoration of the marriage of Lakshmi and Vishnu, while others observe it as the birthday of Lakshmi.
        During the festival, diyas are lit and placed in rows along the parapets of temples and houses and set adrift on rivers and streams. Homes are decorated, and floors inside and out are covered with rangoli, consisting of elaborate designs made of coloured rice, sand, or flower petals. The doors and windows of houses are kept open in the hope that Lakshmi will find her way inside and bless the residents with wealth and success.</p>
     </li>
     </ol>
     
     </main>
    );
  }
}

export default Main;