const field_div_suffix = '_box';
const field_button_prefix = 'to_';
const field_text_suffix = '_text';
const field_result_suffix = '_result';
const sep_suffix = '_sep';
const titlecase_suffix = '_titlecase';
const iso4_suffix = '_iso4';
const fetch_prefix = 'fetchdoi_';
const allfields = ['author','editor','title','journal','booktitle','volume','issue','number','pages','pid','eventdate','date','address','publisher','venue','institute','doi'];

const reftype = document.getElementById('reftype');
const refdesc = document.getElementById('ref-type-desc');


const jacow_proc = {
    eefact: {
        'name': 'eeFACT',
        '2008': {
            venue: 'Novosibirsk, Russia',
            eventdate: '2008-04-14/2008-04-16',
        },
        '2016': {
            venue: 'Daresbury, United Kingdom',
            eventdate: '2016-10-24/2016-10-27',
        },
        '2018': {
            venue: 'Hong Kong, China',
            eventdate: '2018-09-24/2018-09-27',
        },
        '2022': {
            venue: 'Frascati, Italy',
            eventdate: '2022-09-12/2022-09-16',
        },
    },
    ecloud: {
        'name': 'eCloud',
        '2010': {
            venue: 'Ithaca, New York, USA',
            eventdate: '2010-10-08/2010-10-12',
        },
    },
    erl: {
        'name': 'ERL',
        '2007': {
            venue: 'Daresbury, United Kingdom',
            eventdate: '2001-05-21/2007-05-25',
        },
        '2009': {
            venue: 'Ithaca, New York, USA',
            eventdate: '2009-06-08/2009-06-12',
        },
        '2011': {
            venue: 'Tsukuba, Japan',
            eventdate: '2011-10-16/2011-10-21',
        },
        '2013': {
            venue: 'Novosibirsk, Russia',
            eventdate: '2013-09-09/2013-09-13',
        },
        '2015': {
            venue: 'Stony Brook, NY, USA',
            eventdate: '2015-06-07/2015-06-12',
        },
        '2017': {
            venue: 'Geneva, Switzerland',
            eventdate: '2017-06-18/2017-06-23',
        },
        '2019': {
            venue: 'Berlin, Germany',
            eventdate: '2019-09-15/2019-09-20',
        },
    },
    fls: {
        'name': 'FLS',
        '2006': {
            venue: 'Hamburg, Germany',
            eventdate: '2006-05-15/2006-05-16',
        },
        '2018': {
            venue: 'Shanghai, China',
            eventdate: '2018-03-05/2018-03-09',
        },
        '2023': {
            venue: 'Luzern, Switzerland',
            eventdate: '2023-08-27/2023-09-01',
        },
    },
    hb: {
        'name': 'HB',
        '2006': {
            venue: 'Tsukuba, Japan',
            eventdate: '2006-05-29/2006/06-02',
        },
        '2008': {
            venue: 'Nashville, Tennessee, USA',
            eventdate: '2008-08-25/2008-08-29',
        },
        '2010': {
            venue: 'Morschach, Switzerland',
            eventdate: '2010-09-27/2010-10-01',
        },
        '2012': {
            venue: 'Beijing, China',
            eventdate: '2012-09-17/2012-09-21',
        },
        '2014': {
            venue: 'East-Lansing, MI, USA',
            eventdate: '2014-11-10/2014-11-14',
        },
        '2016': {
            venue: 'Malmö, Sweden',
            eventdate: '2016-07-03/2016-07-08',
        },
        '2018': {
            venue: 'Daejeon, Korea',
            eventdate: '2018-06-18/2018-06-22',
        },
        '2021': {
            venue: 'Batavia, IL, USA',
            eventdate: '2021-10-04/2021-10-08',
        },
    },
    hf: {
        'name': 'HF',
        '2014': {
            venue: 'Beijing, China',
            eventdate: '2014-10-09/2014-10-12',
        },
    },
    apac: {
        'name': 'APAC',
        '1998': {
            venue: 'Tsukuba, Japan',
            eventdate: '1998-03-23/1998-03-27',
        },
        '2001': {
            venue: 'Beijing, China',
            eventdate: '2001-09-17/2001-09-21',
        },
        '2004': {
            venue: 'Gyeongju, Korea',
            eventdate: '2004-03-22/2004-03-26',
        },
        '2007': {
            venue: 'Indore, India',
            eventdate: '2007-01-29/2007-02-02',
        },
    },
    biw: {
        'name': 'BIW',
        '2008': {
            venue: 'Tahoe City, California, USA',
            eventdate: '2008-05-04/2008-05-08',
        },
        '2010': {
            venue: 'Santa Fe, New Mexico, USA',
            eventdate: '2010-05-02/2010-05-06',
        },
        '2012': {
            venue: 'Newport News, Virginia, USA',
            eventdate: '2012-04-15/2012-04-19',
        },
    },
    cool: {
        'name': 'COOL',
        '2007': {
            venue: 'Bad Kreuznach, Germany',
            eventdate: '2007-09-09/2007-09-14',
        },
        '2009': {
            venue: 'Lanzhou, China',
            eventdate: '2009-08-31/2009-09-04',
        },
        '2011': {
            venue: 'Alushta, Ukraine',
            eventdate: '2011-09-12/2011-09-16',
        },
        '2013': {
            venue: 'Mürren, Switzerland',
            eventdate: '2013-06-10/2013-06-14',
        },
        '2015': {
            venue: 'Newport News, Virginia, USA',
            eventdate: '2015-09-28/2015-10-02',
        },
        '2017': {
            venue: 'Bonn, Germany',
            eventdate: '2017-09-18/2017-09-21',
        },
        '2019': {
            venue: 'Novosibirsk, Russian',
            eventdate: '2019-09-23/2019-09-27',
        },
        '2021': {
            venue: 'Novosibirsk, Russian',
            eventdate: '2021-11-01/2021-11-05',
        },
        '2023': {
            venue: 'Montreux, Switzerland',
            eventdate: '2023-10-08/2023-10-14',
        },
    },
    cyclotrons: {
        'name': 'CYCLOTRONS',
        '1959': {
            venue: 'Sea Island, Georgia, USA',
            eventdate: '1959-02-02/1959-02-04',
        },
        '1963': {
            venue: 'Geneva, Switzerland',
            eventdate: '1963-04-23/1963-04-26',
        },
        '1966': {
            venue: 'Gatlinburg, Tennessee, USA',
            eventdate: '1966-05-02/1966-05-05',
        },
        '1969': {
            venue: 'Oxford, United Kingdom',
            eventdate: '1969-09-17/1969-09-20',
        },
        '1972': {
            venue: 'Vancouver, Canada',
            eventdate: '1972-07-18/1972-07-21',
        },
        '1975': {
            venue: 'Zürich, Switzerland',
            eventdate: '1975-08-19/1975-08-22',
        },
        '1978': {
            venue: 'Bloomington, Indiana, USA',
            eventdate: '1978-09-18/1978-09-21',
        },
        '1981': {
            venue: 'Caen, France',
            eventdate: '1981-09-07/1981-09-10',
        },
        '1984': {
            venue: 'East Lansing, Michigan, USA',
            eventdate: '1984-04-30/1984-05-03',
        },
        '1986': {
            venue: 'Tokyo, Japan',
            eventdate: '1986-10-13/1986-10-17',
        },
        '1989': {
            venue: 'Berlin, Germany',
            eventdate: '1989-05-08/1989-05-12',
        },
        '1992': {
            venue: 'Vancouver, BC, Canada',
            eventdate: '1992-07-06/1992-07-10',
        },
        '1995': {
            venue: 'Cape Town, South Africa',
            eventdate: '1995-10-08/1995-10-13',
        },
        '1998': {
            venue: 'Caen, France',
            eventdate: '1998-06-14/1998-06-19',
        },
        '2001': {
            venue: 'East Lansing, Michigan, USA',
            eventdate: '2001-05-13/2001-05-17',
        },
        '2004': {
            venue: 'Tokyo, Japan',
            eventdate: '2004-10-18/2004-10-22',
        },
        '2007': {
            venue: 'Giardini Naxos, Italy',
            eventdate: '2007-10-01/2007-10-05',
        },
        '2010': {
            venue: 'Lanzhou, China',
            eventdate: '2010-09-06/2010-09-10',
        },
        '2013': {
            venue: 'Vancouver, BC, Canada',
            eventdate: '2013-09-16/2013-09-20',
        },
        '2016': {
            venue: 'Zürich, Switzerland',
            eventdate: '2016-09-11/2016-09-16',
        },
        '2019': {
            venue: 'Cape Town, South Africa',
            eventdate: '2019-09-22/2019-09-27',
        },
        '2022': {
            venue: 'Beijing, China',
            eventdate: '2022-12-5/2022-12-9',
        },
    },
    dipac: {
        'name': 'DIPAC',
        '1999': {
            venue: 'Chester, UK',
            eventdate: '1999-05-16/1999-05-18',
        },
        '2001': {
            venue: 'Grenoble, France',
            eventdate: '2001-05-13/2001-05-15',
        },
        '2003': {
            venue: 'Mainz,  Germany',
            eventdate: '2003-05-05/2003-05-07',
        },
        '2005': {
            venue: 'Lyon, France',
            eventdate: '2005-06-06/2005-06-08',
        },
        '2007': {
            venue: 'Venice, Italy',
            eventdate: '2007-05-20/2007-05-23',
        },
        '2009': {
            venue: 'Basel, Switzerland',
            eventdate: '2009-05-25/2009-05-27',
        },
        '2011': {
            venue: 'Hamburg, Germany.',
            eventdate: '2011-05-16/2011-05-18',
        },
    },
    ecris: {
        'name': 'ECRIS',
        '2008': {
            venue: 'Chicago, Illinois, USA',
            eventdate: '2008-09-15/2008-09-18',
        },
        '2010': {
            venue: 'Grenoble, France',
            eventdate: '2010-08-23/2010-08-26',
        },
        '2012': {
            venue: 'Sydney, Australia',
            eventdate: '2012-09-25/2012-09-28',
        },
        '2014': {
            venue: 'Nizhny Novgorod, Russia',
            eventdate: '2014-08-24/2014-08-28',
        },
        '2016': {
            venue: 'Busan, Korea',
            eventdate: '2016-08-28/2016-09-01',
        },
        '2018': {
            venue: 'Catania, Italy',
            eventdate: '2018-09-10/2018-09-14',
        },
        '2020': {
            venue: 'East Lansing, MI, USA',
            eventdate: '2020-09-28/2020-09-30',
        },
    },
    epac: {
        'name': 'EPAC',
        '1988': {
            venue: 'Rome, Italy',
            eventdate: '1988-06-07/1988-06-11',
        },
        '1990': {
            venue: 'Nice, France',
            eventdate: '1990-06-12/1990-06-16',
        },
        '1992': {
            venue: 'Berlin, Germany',
            eventdate: '1992-03-24/1992-03-28',
        },
        '1994': {
            venue: 'London, England',
            eventdate: '1994-06-27/1994-07-01',
        },
        '1996': {
            venue: 'Sitges, Spain',
            eventdate: '1996-06-10/1996-06-14',
        },
        '1998': {
            venue: 'Stockholm, Sweden',
            eventdate: '1998-06-22/1998-06-26',
        },
        '2000': {
            venue: 'Vienna, Austria',
            eventdate: '2000-06-26/2000-06-30',
        },
        '2002': {
            venue: 'Paris, France',
            eventdate: '2002-06-03/2002-06-07',
        },
        '2004': {
            venue: 'Lucerne, Switzerland',
            eventdate: '2004-07-05/2004-07-09',
        },
        '2006': {
            venue: 'Edinburgh, UK',
            eventdate: '2006-06-26/2006-06-30',
        },
        '2008': {
            venue: 'Genoa, Italy',
            eventdate: '2008-06-23/2008-06-27',
        },
    },
    fel: {
        'name': 'FEL',
        '2004': {
            venue: 'Trieste, Italy',
            eventdate: '2004-08-29/2004-09-03',
        },
        '2005': {
            venue: 'Palo Alto, California, USA',
            eventdate: '2005-08-21/2005-08-26',
        },
        '2006': {
            venue: 'Berlin, Germany',
            eventdate: '2006-08-27/2006-09-01',
        },
        '2007': {
            venue: 'Novosibirsk, Russia',
            eventdate: '2007-08-26/2007-08-31',
        },
        '2008': {
            venue: 'Gyeongju, Korea',
            eventdate: '2008-08-24/2008-08-29',
        },
        '2009': {
            venue: 'Liverpool, UK',
            eventdate: '2009-08-23/2009-08-28',
        },
        '2010': {
            venue: 'Malmö, Sweden',
            eventdate: '2010-08-23/2010-08-27',
        },
        '2011': {
            venue: 'Shanghai, China',
            eventdate: '2011-08-22/2011-08-26',
        },
        '2012': {
            venue: 'Nara, Japan',
            eventdate: '2012-08-26/2012-08-31',
        },
        '2013': {
            venue: 'Manhattan, NY, USA',
            eventdate: '2013-08-26/2013-08-30',
        },
        '2014': {
            venue: 'Basel, Switzerland',
            eventdate: '2014-08-25/2014-08-29',
        },
        '2015': {
            venue: 'Daejeon, Korea',
            eventdate: '2015-08-23/2015-08-28',
        },
        '2017': {
            venue: 'Santa Fe, NM, USA',
            eventdate: '2017-08-20/2017-08-25',
        },
        '2019': {
            venue: 'Hamburg, Germany',
            eventdate: '2019-08-26/2019-08-30',
        },
        '2022': {
            venue: 'Trieste, Italy',
            eventdate: '2022-08-22/2022-08-26',
        },
    },
    hiat: {
        'name': 'HIAT',
        '2009': {
            venue: 'Venice, Italy',
            eventdate: '2009-06-08/2009-06-12',
        },
        '2012': {
            venue: 'Chicago, IL, USA',
            eventdate: '2012-06-18/2012-06-21',
        },
        '2015': {
            venue: 'Yokohama, Japan',
            eventdate: '2015-09-07/2015-09-11',
        },
        '2018': {
            venue: 'Lanzhou, China',
            eventdate: '2018-10-22/2018-10-26',
        },
        '2022': {
            venue: 'Darmstadt, Germany',
            eventdate: '2022-06-27/2022-07-01',
        },
    },
    ibic: {
        'name': 'IBIC',
        '2012': {
            venue: 'Tsukuba, Japan',
            eventdate: '2012-10-01/2012-10-04',
        },
        '2013': {
            venue: 'Oxford, UK',
            eventdate: '2013-09-16/2013-09-19',
        },
        '2014': {
            venue: 'Monterey, CA, USA',
            eventdate: '2014-09-14/2014-09-18',
        },
        '2015': {
            venue: 'Melbourne, Australia',
            eventdate: '2015-09-13/2015-09-17',
        },
        '2016': {
            venue: 'Barcelona, Spain',
            eventdate: '2016-09-11/2016-09-15',
        },
        '2017': {
            venue: 'Grand Rapids, MI, USA',
            eventdate: '2017-08-20/2017-08-24',
        },
        '2018': {
            venue: 'Shanghai, China',
            eventdate: '2018-09-09/2018-09-13',
        },
        '2019': {
            venue: 'Malmö, Sweden',
            eventdate: '2019-09-08/2019-09-12',
        },
        '2020': {
            venue: 'Santos, Brazil',
            eventdate: '2020-09-14/2020-09-18',
        },
        '2021': {
            venue: 'Pohang, Korea',
            eventdate: '2021-09-13/2021-09-17',
        },
        '2022': {
            venue: 'Kraków, Poland',
            eventdate: '2022-09-11/2022-09-15',
        },
        '2023': {
            venue: 'Saskatoon, Canada',
            eventdate: '2023-09-10/2023-09-14',
        },
    },
    icalepcs: {
        'name': 'ICALEPCS',
        '1991': {
            venue: 'Tsukuba, Japan',
            eventdate: '1991-11-11/1991-11-15',
        },
        '1999': {
            venue: 'Trieste, Italy',
            eventdate: '1999-10-04/1999-10-08',
        },
        '2001': {
            venue: 'San Jose, California, USA',
            eventdate: '2001-11-27/2001-11-30',
        },
        '2003': {
            venue: 'Gyeongju, Korea',
            eventdate: '2003-10-13/2003-10-17',
        },
        '2005': {
            venue: 'Geneva, Switzerland',
            eventdate: '2005-10-10/2005-10-14',
        },
        '2007': {
            venue: 'Knoxville, Tennessee, USA',
            eventdate: '2007-10-15/2007-10-19',
        },
        '2009': {
            venue: 'Kobe, Japan',
            eventdate: '2009-10-12/2009-10-16',
        },
        '2011': {
            venue: 'Grenoble, France',
            eventdate: '2011-10-10/2011-10-14',
        },
        '2013': {
            venue: 'San Francisco, CA, USA',
            eventdate: '2013-10-06/2013-10-11',
        },
        '2015': {
            venue: 'Melbourne, Australia',
            eventdate: '2015-10-17/2015-10-23',
        },
        '2017': {
            venue: 'Barcelona, Spain',
            eventdate: '2017-10-08/2017-10-13',
        },
        '2019': {
            venue: 'Brooklyn, New York City, NY, USA',
            eventdate: '2019-10-07/2019-10-11',
        },
        '2021': {
            venue: 'Shanghai, China',
            eventdate: '2021-10-14/2021-10-22',
        },
        '2023': {
            venue: 'Cape Town, South Africa',
            eventdate: '2023-10-07/2023-10-13',
        },
    },
    icap: {
        'name': 'ICAP',
        '2006': {
            venue: 'Chamonix, France',
            eventdate: '2006-10-02/2006-10-06',
        },
        '2009': {
            venue: 'San Francisco, California, US',
            eventdate: '2009-08-31/2009-09-04',
        },
        '2012': {
            venue: 'Rostock-Warnemünde, Germany',
            eventdate: '2012-08-19/2012-08-24',
        },
        '2015': {
            venue: 'Shanghai, China',
            eventdate: '2015-10-12/2015-10-16',
        },
        '2018': {
            venue: 'Key West, FL, USA',
            eventdate: '2018-10-20/2018-10-24',
        },
    },
    ipac: {
        'name': 'IPAC',
        '2010': {
            venue: 'Kyoto, Japan',
            eventdate: '2010-05-23/2010-05-28',
        },
        '2011': {
            venue: 'San Sebastián, Spain',
            eventdate: '2011-09-04/2011-09-09',
        },
        '2012': {
            venue: 'New Orleans, Louisiana, USA',
            eventdate: '2012-05-20/2012-05-25',
        },
        '2013': {
            venue: 'Shanghai, China',
            eventdate: '2013-05-12/2013-05-17',
        },
        '2014': {
            venue: 'Dresden, Germany',
            eventdate: '2014-06-15/2014-06-20',
        },
        '2015': {
            venue: 'Richmond, VA, USA',
            eventdate: '2015-05-03/2015-05-08',
        },
        '2016': {
            venue: 'Busan, Korea',
            eventdate: '2016-08-08/2016-05-13',
        },
        '2017': {
            venue: 'Copenhagen, Denmark',
            eventdate: '2017-05-14/2017-05-19',
        },
        '2018': {
            venue: 'Vancouver, Canada',
            eventdate: '2018-04-29/2018-05-04',
        },
        '2019': {
            venue: 'Melbourne, Australia',
            eventdate: '2019-05-19/2019-05-24',
        },
        '2020': {
            venue: 'Caen, France',
            eventdate: '2020-05-10/2020-05-15',
        },
        '2021': {
            venue: 'Campinas, Brazil',
            eventdate: '2021-05-24/2021-05-28',
        },
        '2022': {
            venue: 'Bangkok, Thailand',
            eventdate: '2022-06-12/2022-06-17',
        },
        '2023': {
            venue: 'Venice, Italy',
            eventdate: '2023-05-07/2023-05-12',
        },
    },
    linac: {
        'name': 'LINAC',
        '1961': {
            venue: 'Upton, Long Island, New York, USA',
            eventdate: '1961-04-01/1961-04-14',
        },
        '1962': {
            venue: 'Upton, Long Island, New York, USA',
            eventdate: '1962-08-20/1962-08-24',
        },
        '1963': {
            venue: 'New Haven, Connecticut, USA',
            eventdate: '1963-10-21/1963-10-25',
        },
        '1964': {
            venue: 'Madison, Wisconsin, USA',
            eventdate: '1964-07-20/1964-07-24',
        },
        '1966': {
            venue: 'Los Alamos, New Mexico, USA',
            eventdate: '1966-10-03/1966-10-07',
        },
        '1968': {
            venue: 'Upton, Long Island, New York, USA',
            eventdate: '1968-05-20/1968-05-24',
        },
        '1970': {
            venue: 'Batavia, Illinois, USA',
            eventdate: '1970-09-28/1970-10-02',
        },
        '1972': {
            venue: 'Los Alamos, New Mexico, USA',
            eventdate: '1972-10-10/1972-10-13',
        },
        '1976': {
            venue: 'Chalk River, Ontario, Canada',
            eventdate: '1976-09-14/1976-09-17',
        },
        '1979': {
            venue: 'Montauk, New York, USA',
            eventdate: '1979-09-10/1979-09-14',
        },
        '1981': {
            venue: 'Santa Fe, New Mexico, USA',
            eventdate: '1981-10-19/1981-10-23',
        },
        '1984': {
            venue: 'Seeheim, Germany',
            eventdate: '1984-05-07/1984-05-11',
        },
        '1986': {
            venue: 'Stanford, California, USA',
            eventdate: '1986-06-02/1986-06-06',
        },
        '1988': {
            venue: 'Newport News, Virginia, USA',
            eventdate: '1988-10-03/1988-10-07',
        },
        '1990': {
            venue: 'Albuquerque, New Mexico, USA',
            eventdate: '1990-09-10/1990-09-14',
        },
        '1992': {
            venue: 'Ottawa, Ontario, Canada',
            eventdate: '1992-08-24/1992-08-28',
        },
        '1994': {
            venue: 'Tsukuba, Japan',
            eventdate: '1994-08-21/1994-08-26',
        },
        '1996': {
            venue: 'Geneva, Switzerland',
            eventdate: '1996-08-26/1996-08-30',
        },
        '1998': {
            venue: 'Chicago, Illinois, USA',
            eventdate: '1998-08-23/1998-08-28',
        },
        '2000': {
            venue: 'Monterey, CA, USA',
            eventdate: '2000-08-21/2000-08-25',
        },
        '2002': {
            venue: 'Gyeongju, Korea',
            eventdate: '2002-08-19/2002-08-23',
        },
        '2004': {
            venue: 'Lübeck, Germany',
            eventdate: '2004-08-16/2004-08-20',
        },
        '2006': {
            venue: 'Knoxville, Tennessee USA',
            eventdate: '2006-08-21/2006-08-25',
        },
        '2008': {
            venue: 'Victoria, British Columbia, Canada',
            eventdate: '2008-09-29/2008-10-03',
        },
        '2010': {
            venue: 'Tsukuba, Japan',
            eventdate: '2010-09-12/2010-09-17',
        },
        '2012': {
            venue: 'Tel Aviv, Israel',
            eventdate: '2012-09-09/2012-09-14',
        },
        '2014': {
            venue: 'Geneva, Switzerland',
            eventdate: '2014-08-31/2014-09-05',
        },
        '2016': {
            venue: 'East Lansing, MI, USA',
            eventdate: '2016-09-25/2016-09-30',
        },
        '2018': {
            venue: 'Beijing, China',
            eventdate: '2018-09-16/2018-09-21',
        },
        '2020': {
            venue: 'Liverpool, UK',
            eventdate: '2020-09-01/2020-09-04',
        },
        '2022': {
            venue: 'Liverpool, UK',
            eventdate: '2022-08-28/2022-09-02',
        },
    },
    medsi: {
        'name': 'MEDSI',
        '2016': {
            venue: 'Barcelona, Spain',
            eventdate: '2016-09-11/2016-09-16',
        },
        '2018': {
            venue: 'Paris, France',
            eventdate: '2018-06-25/2018-06-29',
        },
        '2021': {
            venue: 'Chicago, IL, USA',
            eventdate: '2021-07-26/2021-07-29',
        },
        '2023': {
            venue: 'Beijing, China',
            eventdate: '2023-11-06/2023-11-10',
        },
    },
    napac: {
        'name': 'NAPAC',
        '2011': {
            venue: 'New York, NY, USA',
            eventdate: '2011-03-28/2011-04-01',
        },
        '2013': {
            venue: 'Pasadena, CA, USA',
            eventdate: '2013-09-29/2013-10-04',
        },
        '2016': {
            venue: 'Chicago, IL, USA',
            eventdate: '2016-10-09/2016-10-14',
        },
        '2019': {
            venue: 'Lansing, MI, USA',
            eventdate: '2019-09-02/2019-09-06',
        },
        '2022': {
            venue: 'Albuquerque, NM, USA',
            eventdate: '2022-08-07/2022-08-12',
        },
    },
    pac: {
        'name': 'PAC',
        '1965': {
            venue: 'Washington D.C., USA',
            eventdate: '1965-03-10/1965-03-12',
        },
        '1967': {
            venue: 'Washington D.C., USA',
            eventdate: '1967-03-01/1967-03-03',
        },
        '1969': {
            venue: 'Washington D.C., USA',
            eventdate: '1969-03-05/1969-03-07',
        },
        '1971': {
            venue: 'Chicago, IL, USA',
            eventdate: '1971-03-01/1971-03-03',
        },
        '1973': {
            venue: 'San Francisco, CA, USA',
            eventdate: '1973-03-05/1973-03-07',
        },
        '1975': {
            venue: 'Washington D.C., USA',
            eventdate: '1975-03-12/1975-03-14',
        },
        '1977': {
            venue: 'Chicago, IL, USA',
            eventdate: '1977-03-16/1977-03-18',
        },
        '1979': {
            venue: 'San Francisco, CA, USA',
            eventdate: '1979-03-12/1979-03-14',
        },
        '1981': {
            venue: 'Washington D.C., USA',
            eventdate: '1981-03-11/1981-03-13',
        },
        '1983': {
            venue: 'Santa Fe, New Mexico, USA',
            eventdate: '1983-03-21/1983-03-23',
        },
        '1985': {
            venue: 'Vancouver, BC, Canada',
            eventdate: '1985-03-13/1985-03-16',
        },
        '1987': {
            venue: 'Washington D.C., USA',
            eventdate: '1987-03-16/1987-03-19',
        },
        '1989': {
            venue: 'Chicago, IL, USA',
            eventdate: '1989-03-20/1989-03-23',
        },
        '1991': {
            venue: 'San Francisco, CA, USA',
            eventdate: '1991-05-06/1991-05-09',
        },
        '1993': {
            venue: 'Washington D.C., USA',
            eventdate: '1993-05-17/1993-05-20',
        },
        '1995': {
            venue: 'Dallas, Texas, USA',
            eventdate: '1995-05-01/1995-05-05',
        },
        '1997': {
            venue: 'Vancouver, B.C., Canada',
            eventdate: '1997-05-12/1997-05-16',
        },
        '1999': {
            venue: 'New York City, New York, USA',
            eventdate: '1999-03-29/1999-04-02',
        },
        '2001': {
            venue: 'Chicago, Illinois, USA',
            eventdate: '2001-06-18/2001-06-22',
        },
        '2003': {
            venue: 'Portland, Oregon, USA',
            eventdate: '2003-05-12/2003-05-16',
        },
        '2005': {
            venue: 'Knoxville, Tennessee, USA',
            eventdate: '2005-05-16/2005-05-20',
        },
        '2007': {
            venue: 'Albuquerque, New Mexico, USA',
            eventdate: '2007-06-25/2007-06-29',
        },
        '2009': {
            venue: 'Vancouver, British Columbia, Canada',
            eventdate: '2009-05-04/2009-05-08',
        },
    },
    pcapac: {
        'name': 'PCaPAC',
        '2008': {
            venue: 'Ljubljana, Slovenia',
            eventdate: '2008-10-20/2008-10-23',
        },
        '2010': {
            venue: 'Saskatoon, Saskatchewan, Canada',
            eventdate: '2010-10-06/2010-10-08',
        },
        '2012': {
            venue: 'Kolkata, India',
            eventdate: '2012-12-04/2012-12-07',
        },
        '2014': {
            venue: 'Karlsruhe, Germany',
            eventdate: '2014-10-14/2014-10-17',
        },
        '2016': {
            venue: 'Campinas, Brazil',
            eventdate: '2016-10-25/2016-10-28',
        },
        '2018': {
            venue: 'Hsinchu, Taiwan',
            eventdate: '2018-10-16/2018-10-19',
        },
        '2022': {
            venue: 'Dolní Brežany, Czech Republic',
            eventdate: '2022-10-04/2022-10-07',
        },
    },
    rupac: {
        'name': 'RuPAC',
        '2004': {
            venue: 'Dubna, Russia',
            eventdate: '2004-10-04/2004-10-08',
        },
        '2006': {
            venue: 'Novosibirsk, Russia',
            eventdate: '2006-09-10/2006-09-14',
        },
        '2008': {
            venue: 'Zvenigorod, Russia',
            eventdate: '2008-09-28/2008-10-03',
        },
        '2010': {
            venue: 'Protvino, Russia',
            eventdate: '2010-09-27/2010-10-01',
        },
        '2012': {
            venue: 'Saint-Petersburg, Russia',
            eventdate: '2012-09-24/2012-09-28',
        },
        '2014': {
            venue: 'Obninsk, Russia',
            eventdate: '2014-10-06/2014-10-10',
        },
        '2016': {
            venue: 'Saint-Petersburg, Russia',
            eventdate: '2016-11-21/2016-11-25',
        },
        '2018': {
            venue: 'Protvino, Russia',
            eventdate: '2018-10-01/2018-10-05',
        },
        '2021': {
            venue: 'Alushta, Russia',
            eventdate: '2021-09-27/2021-10-01',
        },
    },
    sap: {
        'name': 'SAP',
        '2014': {
            venue: 'Lanzhou, China',
            eventdate: '2014-08-13/2014-08-15',
        },
        '2017': {
            venue: 'Jishou, Hunan, China',
            eventdate: '2017-08-28/2017-08-30',
        },
    },
    srf: {
        'name': 'SRF',
        '1980': {
            venue: 'Karlsruhe, Germany',
            eventdate: '1980-07-02/1980-07-04',
        },
        '1984': {
            venue: 'Geneva, Switzerland',
            eventdate: '1984-07-23/1984-07-27',
        },
        '1987': {
            venue: 'Argonne National Laboratory, Illinois, USA',
            eventdate: '1987-09-14/1987-09-18',
        },
        '1989': {
            venue: 'KEK, Tsukuba, Japan',
            eventdate: '1989-08-14/1989-08-18',
        },
        '1991': {
            venue: 'DESY, Hamburg, Germany',
            eventdate: '1991-08-19/1991-08-23',
        },
        '1993': {
            venue: 'CEBAF, Newport News, Virginia, USA',
            eventdate: '1993-10-04/1993-10-08',
        },
        '1995': {
            venue: 'Gif-sur-Yvette, France',
            eventdate: '1995-10-17/1995-10-20',
        },
        '1997': {
            venue: 'Abano Terme (Padova), Italy',
            eventdate: '1997-10-06/1997-10-10',
        },
        '1999': {
            venue: 'Santa Fe, New Mexico, USA',
            eventdate: '1999-11-01/1999-11-05',
        },
        '2001': {
            venue: 'Tsukuba, Ibaraki, Japan',
            eventdate: '2001-09-06/2001-09-11',
        },
        '2003': {
            venue: 'Lübeck/Travemünder, Germany',
            eventdate: '2003-09-08/2003-09-12',
        },
        '2005': {
            venue: 'Cornell University, Ithaca, New York, USA',
            eventdate: '2005-07-10/2005-07-15',
        },
        '2007': {
            venue: 'Peking Univ., Beijing, China',
            eventdate: '2007-10-14/2007-10-19',
        },
        '2009': {
            venue: 'Berlin, Germany',
            eventdate: '2009-09-20/2009-09-25',
        },
        '2011': {
            venue: 'Chicago, IL, USA',
            eventdate: '2011-07-25/2011-07-29',
        },
        '2013': {
            venue: 'Paris, France',
            eventdate: '2013-09-23/2013-09-27',
        },
        '2015': {
            venue: 'Whistler, BC, Canada',
            eventdate: '2015-09-13/2015-09-18',
        },
        '2017': {
            venue: 'Lanzhou, China',
            eventdate: '2017-07-17/2017-07-21',
        },
        '2019': {
            venue: 'Dresden, Germany',
            eventdate: '2019-06-30/2019-07-05',
        },
        '2021': {
            venue: 'East Lansing, MI, USA',
            eventdate: '2021-06-27/2021-07-02',
        },
        '2023': {
            venue: 'Grand Rapids, MI, USA',
            eventdate: '2023-06-25/2023-06-30',
        },
    },
};

const refform = document.getElementById('refform');
const refformParent = refform.parentNode;
let temp,tempHTML;

const etal_str = '<i>et al.</i>';
const regex_etal = /(?:et\s+al|others)/i;
const regex_after_etal = /(?:[^\p{L}]+and)?[^\p{L}]+(?:et\s+al|others).*$/ui;
const regex_has_letter = /\p{L}+/ui;

let authors_str, authors, last_author, names, etal, regex_sep;
const author_to_first_last = function(s) {
    names = s.trim().split(/\s*,\s*/);
    return names.reverse().join(" ");
}
const trim_symbols = function(s) {
    temp = s;
    temp = temp.replace(/[^\p{L}\.]*$/u,'');
    temp = temp.replace(/^[^\p{L}]*/u,'');
    return temp;
}
const check_non_trivial = function(s) {
    return regex_has_letter.test(s);
}
const string_is_non_empty = function(s) {
    return (s.length>0);
}
const result_is_non_empty = function(s) {
    return eval(`${s}${field_result_suffix}.innerHTML.trim().length>0`);
}
const get_result = function(s) {
    return eval(`${s}${field_result_suffix}.innerHTML`);
}
const to_author_list = function(s,sep) {
    authors_str = s;
    regex_sep = new RegExp(sep,'g');
    etal = regex_etal.test(authors_str);
    if (etal) {
        authors_str = authors_str.replace(regex_after_etal,'');
    }
    authors = Array.from(authors_str.split(regex_sep)).map((s) => author_to_first_last(trim_symbols(s))).filter(check_non_trivial);
    if (etal) {
        authors.push(etal_str);
        switch(authors.length) {
        case 1:
            authors_str = '';
            break;
        case 2:
            authors_str = authors.join(' ');
            break;
        default:
            authors_str = authors.join(', ');
        }
    } else {
        if (authors.length>1) {
            last_author = authors.pop();
            authors.push('and '+last_author);
        }
        switch(authors.length) {
        case 0:
            authors_str = '';
            break;
        case 1:
            authors_str = authors.join('');
            break;
        case 2:
            authors_str = authors.join(' ');
            break;
        default:
            authors_str = authors.join(', ');
        }
    }
    return authors_str;
}
let mydiv, mysep, mytext, myresult;
const to_author_result = function(e) {
    mydiv = e.target.parentNode.id.slice(0,-field_div_suffix.length);
    eval(`mysep = ${mydiv}${sep_suffix};`);
    eval(`mytext = ${mydiv}${field_text_suffix};`);
    eval(`myresult = ${mydiv}${field_result_suffix};`);

    temp = mysep.value;
    temp = temp.trim();
    if (temp == '') {
        temp = ',';
    }

    myresult.innerHTML = to_author_list(mytext.value,temp);
}

const to_title_result = function(e) {
    if (reftype.value == 'book') {
        title_result.innerHTML = `<i>${title_text.value}</i>`;
    } else {
        title_result.innerHTML = `“${title_text.value}”`;
    }
}

const toTitleCase = (str) => {
    const articles = ['a', 'an', 'the'];
    const conjunctions = ['for', 'and', 'nor', 'but', 'or', 'yet', 'so'];
    const prepositions = [
        'with', 'at', 'from', 'into','upon', 'of', 'to', 'in', 'for',
        'on', 'by', 'like', 'over', 'plus', 'but', 'up', 'down', 'off', 'near'
    ];

    // The list of spacial characters can be tweaked here
    const replaceCharsWithSpace = (str) => str.replace(/(\s\s+)/gi, ' ');
    const capitalizeFirstLetter = (str) => str.charAt(0).toUpperCase() + str.substr(1);
    const normalizeStr = (str) => str.toLowerCase().trim();
    const shouldCapitalize = (word, fullWordList, posWithinStr) => {
        if ((posWithinStr == 0) || (posWithinStr == fullWordList.length - 1)) {
            return true;
        }

        return !(articles.includes(word) || conjunctions.includes(word) || prepositions.includes(word));
    }

    str = replaceCharsWithSpace(str);
    str = normalizeStr(str);

    let words = str.split(' ');
    if (words.length <= 2) { // Strings less than 3 words long should always have first words capitalized
        words = words.map(w => capitalizeFirstLetter(w));
    }
    else {
        for (let i = 0; i < words.length; i++) {
            words[i] = (shouldCapitalize(words[i], words, i) ? capitalizeFirstLetter(words[i], words, i) : words[i]);
        }
    }

    return words.join(' ');
}
const to_title_case = function(e) {
    mydiv = e.target.parentNode.id.slice(0,-field_div_suffix.length);
    eval(`mytext = ${mydiv}${field_text_suffix};`);
    mytext.value = toTitleCase(mytext.value);
    mytext.dispatchEvent(new Event('input'));
}
const to_upper_case = function(e) {
    var selection;
    mydiv = e.target.parentNode.id.slice(0,-field_div_suffix.length);
    eval(`mytext = ${mydiv}${field_text_suffix};`);
    mytext.value = toTitleCase(mytext.value);
    mytext.dispatchEvent(new Event('input'));
}
const to_journal_result = function(e) {
    mydiv = e.target.parentNode.id.slice(0,-field_div_suffix.length);
    eval(`mytext = ${mydiv}${field_text_suffix};`);
    eval(`myresult = ${mydiv}${field_result_suffix};`);
    if (mydiv == 'booktitle') {
        myresult.innerHTML = `in <i>${mytext.value}</i>`;
    } else {
        myresult.innerHTML = `<i>${mytext.value}</i>`;
    }
}

const to_journal_iso4 = function(e) {
    mydiv = e.target.parentNode.id.slice(0,-field_div_suffix.length);
    eval(`mytext = ${mydiv}${field_text_suffix};`);
    eval(`myresult = ${mydiv}${field_result_suffix};`);
    mytext.value = abbrevIso.makeAbbreviation(mytext.value);
    if (mydiv == 'booktitle') {
        myresult.innerHTML = `in <i>${mytext.value}</i>`;
    } else {
        myresult.innerHTML = `<i>${mytext.value}</i>`;
    }
}

const to_volume_result = function(e) {
    volume_result.innerHTML = `vol.&nbsp;${volume_text.value}`;
}

const to_issue_result = function(e) {
    issue_result.innerHTML = `no.&nbsp;${issue_text.value}`;
}

const to_number_result = function(e) {
    number_result.innerHTML = `Rep.&nbsp;${number_text.value}`;
}

let pp, pp_str;
const to_pages_result = function(e) {
    pp = Array.from(pages_text.value.split(/\p{Dash}+/u)).map((s) => s.trim()).filter(check_non_trivial);
    switch(pp.length) {
    case 0:
        pp_str = '';
        break;
    case 1:
        pp_str = `p.&nbsp;${pp[0]}`;
        break;
    default:
        pp_str = `pp.&nbsp;${pp.join('&ndash;')}`;
    }
    pages_result.innerHTML = pp_str;
}

const to_pid_result = function(e) {
    pid_result.innerHTML = `paper ${pid_text.value}`;
}

let eventdate,eventenddate,eventday,eventendday,eventmonth,eventendmonth,eventyear,eventendyear,month_str,endmonth_str,dates_str;
const to_month = function(s) {
    return Intl.DateTimeFormat('en', { month: 'short' }).format(new Date(s));
}
const to_dates = function(s) {
    [eventdate,eventenddate] = s.split("/");
    if (eventdate == null) {
        dates_str = '';
    } else {
        [eventyear,eventmonth,eventday] = eventdate.split(/\p{Dash}+/u).map((str) => str.trim());
        if ((eventenddate == null) || (eventenddate == '')) {
            if (eventmonth == null) {
                dates_str = eventyear;
            } else {
                dates_str = [to_month(eventmonth),eventyear].join(' ');
            }
        } else {
            [eventendyear,eventendmonth,eventendday] = eventenddate.split(/\p{Dash}+/u).map((str) => str.trim());
            if (eventyear==eventendyear) {
                if ((eventmonth==eventendmonth) || (eventendmonth==null)) {
                    dates_str = [to_month(eventmonth),eventyear].join(' ');
                } else {
                    dates_str = [[eventmonth,eventendmonth].map((mon) => to_month(mon)).join('&ndash;'),eventyear].join(' ');
                }
            } else {
                dates_str = [[to_month(eventmonth),eventyear].join(' '),[to_month(eventendmonth),eventendyear].join(' ')].join('&ndash;');
            }
        }
    }
    return dates_str;
}
const to_dates_result = function(e) {
    mydiv = e.target.parentNode.id.slice(0,-field_div_suffix.length);
    eval(`mytext = ${mydiv}${field_text_suffix};`);
    eval(`myresult = ${mydiv}${field_result_suffix};`);

    myresult.innerHTML = to_dates(mytext.value);
}

const to_raw_result = function(e) {
    mydiv = e.target.parentNode.id.slice(0,-field_div_suffix.length);
    eval(`mytext = ${mydiv}${field_text_suffix};`);
    eval(`myresult = ${mydiv}${field_result_suffix};`);

    myresult.innerHTML = mytext.value;
}

let bib_text,bib_fields,bib_key,bib_val, bib_dict;
const to_url = function(s) {
    return `<span style="font-family:'New TXTT'; font-size:9pt;" class="url">${s}</span>`;
}
const to_doi_result = function(e) {
    mytext = doi_text.value.replace(/^.*http.*:\/\//i,'').replace(/^.*doi:/i,'').replace(/^.*doi.org\//i,'');
    doi_result.innerHTML = to_url('doi:'+mytext);
}
const str_to_kv = function(s) {
    [bib_key,bib_val] = s.split('=').map((str) => str.trim());
    const bib_kv =
          bib.val === null
          ? ['bibtype', bib_key.toLowerCase()]
          : [bib_key.toLowerCase(),bib_val.replace(/^\s*"/,'').replace(/"\s*$/,'').replace(/^\s*\{/,'').replace(/\}\s*$/,'')];

    return bib_kv;
    // if (bib_val == null) {
    //     return ['bibtype', bib_key.toLowerCase()];
    // } else {
    //     bib_val = bib_val.replace(/^\s*"/,'').replace(/"\s*$/,'').replace(/^\s*\{/,'').replace(/\}\s*$/,'');
    //     return [bib_key.toLowerCase(),bib_val];
    // }
}
const number_to_issue_for_non_rep = function(t,s) {
    if ((!/.*rep.*/i.test(t)) && (/number/i.test(s))) {
        return 'issue';
    } else {
        return s;
    }
}
const jacow_doi = function(s) {
    let groups;
    if (/10.18429\/jacow/i.test(s)) {
        groups = s.match(/^\s*10.18429\/jacow(?<eventpaper>..+)\s*$/i).groups;
        return '10.18429/JACoW'+groups.eventpaper.toUpperCase();
    } else {
        return s;
    }
}

const fix_bib = function(bib) {
    let bb=structuredClone(bib);
    if (/10.18429\/jacow/i.test(bb.doi)) {
        reftype.value = 'inproc';
        reftype.dispatchEvent(new Event("change"));
        const groups = bb.doi.match(/^\s*10.18429\/jacow-(?<event>[a-zA-Z]+)(?<year>\d+)-(?<paperid>[^-]+)\s*$/i).groups;
        const ev = groups.event.toLowerCase();
        const yr = groups.year;
        const pid = groups.paperid.toUpperCase();
        const mybib = jacow_proc[ev][yr];
        bb.venue = mybib.venue;
        bb.eventdate = mybib.eventdate;
        bb.booktitle = `Proc. ${jacow_proc[ev].name}’${yr.slice(-2)}`;
        bb.pid = pid;
        bb.doi = `10.18429/JACoW-${jacow_proc[ev].name}${yr}-${pid}`;
    }
    return bb;     
}
const bib_to_type_tag_contents = function(s) {
    let groups = s.match(/^\s*@(?<type>\w+)\{(?<tag>[^,]+),(?<contents>.*)\}\s*$/).groups;
    let bib_arr = [['bibtype',groups.type.toLowerCase()],['bibtag',groups.tag]];
    let bib_contents = groups.contents+',';
    let bib_matches = Array.from(bib_contents.matchAll(/\s*(\w+)\s*=\s*[\{"](.*?)[\}"]\s*,/gi),m => [number_to_issue_for_non_rep(groups.type,m[1]).toLowerCase(),m[2]]);
    bib_arr = bib_arr.concat(bib_matches);
    return bib_arr;
}


allfields.forEach((fld) => {
    eval(`let ${fld}${field_div_suffix};`);
    eval(`let ${field_button_prefix}${fld};`);
    eval(`let ${fld}${field_text_suffix};`);
    eval(`let ${fld}${field_result_suffix};`);

    eval(`${fld}${field_div_suffix} = document.createElement("div");`);
    eval(`refformParent.appendChild(${fld}${field_div_suffix});`);
    eval(`${fld}${field_div_suffix}.id = "${fld}${field_div_suffix}";`);

    eval(`${field_button_prefix}${fld} = document.createElement("button");`);
    eval(`${fld}${field_div_suffix}.appendChild(${field_button_prefix}${fld});`);
    eval(`${field_button_prefix}${fld}.className = "select";`);
    eval(`${field_button_prefix}${fld}.innerHTML = "${fld}";`);
    eval(`${field_button_prefix}${fld}.id = "${field_button_prefix}${fld}";`);

    eval(`${fld}${field_text_suffix} = document.createElement("input");`);
    eval(`${fld}${field_div_suffix}.appendChild(${fld}${field_text_suffix});`);
    eval(`${fld}${field_text_suffix}.id = "${fld}${field_text_suffix}";`);
    eval(`${fld}${field_text_suffix}.size = "50";`);

    if ((fld == 'author') || (fld == 'editor')) {
        eval(`${fld}${sep_suffix} = document.createElement("input");`);
        eval(`${fld}${field_div_suffix}.appendChild(${fld}${sep_suffix});`);
        eval(`${fld}${sep_suffix}.id = "${fld}${sep_suffix}";`);
        eval(`${fld}${sep_suffix}.size = "10";`);
        eval(`${fld}${sep_suffix}.placeholder = ",";`);
    }
    if ((fld == 'journal') || (fld == 'booktitle') || (fld == 'title')) {
        eval(`${fld}${titlecase_suffix} = document.createElement("button");`);
        eval(`${fld}${field_div_suffix}.appendChild(${fld}${titlecase_suffix});`);
        eval(`${fld}${titlecase_suffix}.id = "${fld}${titlecase_suffix}";`);
        eval(`${fld}${titlecase_suffix}.innerHTML = "Title Case";`);
    }
    if ((fld == 'journal') || (fld == 'booktitle')) {
        eval(`${fld}${iso4_suffix} = document.createElement("button");`);
        eval(`${fld}${field_div_suffix}.appendChild(${fld}${iso4_suffix});`);
        eval(`${fld}${iso4_suffix}.id = "${fld}${iso4_suffix}";`);
        eval(`${fld}${iso4_suffix}.innerHTML = "ISO4";`);
    }
    if (fld == 'doi') {
        eval(`${fetch_prefix}${fld} = document.createElement("button");`);
        eval(`${fld}${field_div_suffix}.appendChild(${fetch_prefix}${fld});`);
        eval(`${fetch_prefix}${fld}.id = "${fetch_prefix}${fld}";`);
        eval(`${fetch_prefix}${fld}.innerHTML = "avada kedavra";`);
    }

    temp = document.createElement('br');
    eval(fld+field_div_suffix+'.appendChild(temp);');

    eval(`${fld}${field_result_suffix} = document.createElement("p");`);
    eval(`${fld}${field_div_suffix}.appendChild(${fld}${field_result_suffix});`);
    eval(`${fld}${field_result_suffix}.id = "${fld}${field_result_suffix}";`);
});

const bib_result = document.createElement("p");
refformParent.appendChild(bib_result);
bib_result.id='bib_result';

['author','editor'].forEach((fld) => {
    eval(`${fld}${field_text_suffix}.addEventListener("input",to_author_result);`);
    eval(`${fld}${sep_suffix}.addEventListener("input",to_author_result);`);
});

title_text.addEventListener('input',to_title_result);
reftype.addEventListener('change',to_title_result);

['title','booktitle','journal'].forEach((fld) => {
    eval(`${fld}${titlecase_suffix}.addEventListener("click",to_title_case);`);
});

['journal','booktitle'].forEach((fld) => {
    eval(`${fld}${field_text_suffix}.addEventListener("input",to_journal_result);`);
    eval(`${fld}${iso4_suffix}.addEventListener("click",to_journal_iso4);`);
});

['volume','issue','number','pages','pid'].forEach((fld) => {
    eval(`${fld}${field_text_suffix}.addEventListener("input",to_${fld}_result);`);
});

['eventdate','date'].forEach((fld) => {
    eval(`${fld}${field_text_suffix}.addEventListener("input",to_dates_result);`);
});

['address','publisher','venue','institute'].forEach((fld) => {
    eval(`${fld}${field_text_suffix}.addEventListener("input",to_raw_result);`);
});

let my_resp,my_url;
doi_text.addEventListener('input',to_doi_result);
fetchdoi_doi.addEventListener('click',async function(event){
    var no_resp;
    const bibtex_option={
        method: 'GET',
        headers: {
            'Accept': 'application/x-bibtex',
        },
    };
    event.preventDefault();
    // (http(s)?://)?(doi:)?((dx.)?doi.org/)?{doi}
    mytext = doi_text.value.replace(/^.*http.*:\/\//i,'').replace(/^.*doi:/i,'').replace(/^.*doi.org\//i,'');
    // doi.org does not always work, so:
    // - get registration agency (RA):
    //   - DOI
    //   - RA: "DataCite"/"Crossref"
    //   - status: "DOI does not exist"
    fetch('https://doi.org/ra/'+mytext,{
        method: 'GET',
    }).then(function(ra_resp){
        if(ra_resp.ok){
            no_resp = false;
            return ra_resp.json();
        } else {
            no_resp = true;
            return ['Network error:','https://doi.org',response.status,response.statusText].join(' ');
        }
    }).then(async function(data){
        if (no_resp) {
            bib_result.innerHTML = to_url(data);
        } else {
            ra = data[0];
            if (ra.RA == null) {
                bib_result.innerHTML = to_url(ra.DOI+': '+ra.status);
            } else {
                switch(ra.RA) {
                case "DataCite":
                    // https://api.datacite.org/dois/{doi}
                    my_url = `https://api.datacite.org/dois/${mytext}`;
                    break;
                case "Crossref":
                    // https://api.crossref.org/works/{doi}/transform/application/x-bibtex
                    my_url = `https://api.crossref.org/works/${mytext}/transform/application/x-bibtex`;
                    break;
                default:
                }
                fetch(my_url,bibtex_option).then(function(r){
                    if(r.ok){
                        no_resp = false;
                        return r.text();
                    } else {
                        no_resp = true;
                        return ['Network error:',my_url,response.status,response.statusText].join(' ');
                    }
                }).then(function(d){
                    if (no_resp) {
                        bib_result.innerHTML = to_url(d);
                    } else {
                        bib_text = bib_to_type_tag_contents(d.replaceAll(/\n/g,''));
                        bib_dict = fix_bib(Object.fromEntries(bib_text));
                        for (const [k,v] of Object.entries(bib_dict)) {
                            if (allfields.includes(k)) {
                                eval(`${k}${field_text_suffix}.value = "${v}";`);
                                eval(`${k}${field_text_suffix}.dispatchEvent(new Event("input"));`);
                            }
                        }
                        ['author','editor'].forEach((fld) => {
                            eval(`${fld}${sep_suffix}.value = "and";`);
                            eval(`${fld}${sep_suffix}.dispatchEvent(new Event("input"));`);
                        });
                        bib_result.innerHTML = to_url(bib_text.map((keyval) => keyval.join('=')).join('<br>'));
                    }
                });
            }
        }
    });
});


const rawref  = document.getElementById('rawref');
const rawrefp = document.getElementById('rawrefp');
const inputHandler = function(e) {
    rawrefp.innerText = e.target.value;
}
rawref.addEventListener('input', inputHandler);


const textHandler = function(e) {
    document.getElementById(e.target.id.slice(0,-field_text_suffix.length)+field_result_suffix).innerHTML = e.target.value;
}

let mytype,result_str,temp_str1,temp_str2,temp_str3;
const get_full_result = function(el) {
    var flds;
    switch(reftype.value) {
    case "article":
        flds=['author','title','journal','volume','issue','pages','date'];
        result_str = flds.map((fld) => get_result(fld)).filter(string_is_non_empty).join(', ')+'.';
        break;
    case "inproc":
        flds=['author','title','booktitle','venue','eventdate','pid','pages'];
        result_str = flds.map((fld) => get_result(fld)).filter(string_is_non_empty).join(', ')+'.';
        break;
    case "inbook":
        flds=['author','title','booktitle','editor'];
        temp_str1 = flds.map((fld) => get_result(fld)).filter(string_is_non_empty).join(', ');
        if (result_is_non_empty('publisher')) {
            flds=['address','publisher'];
            temp_str2 = flds.map((fld) => get_result(fld)).filter(string_is_non_empty).join(': ');
        } else {
            temp_str2 = null;
        }
        if (result_is_non_empty('date')) {
            temp_str2 = [temp_str2,get_result('date')].filter(n=>n).join(', ');
        }
        result_str = [temp_str1, temp_str2].join('. ')+'.';
        break;
    case "book":
        flds=['author','title'];
        temp_str1 = flds.map((fld) => get_result(fld)).filter(string_is_non_empty).join(', ');
        if (result_is_non_empty('publisher')) {
            flds=['address','publisher'];
            temp_str2 = flds.map((fld) => get_result(fld)).filter(string_is_non_empty).join(': ');
        } else {
            temp_str2 = null;
        }
        if (result_is_non_empty('date')) {
            temp_str2 = [temp_str2,get_result('date')].filter(n=>n).join(', ');
        }
        result_str = [temp_str1, temp_str2].join('. ')+'.';
        break;
    case "proc":
        flds=['author','title'];
        temp_str1 = flds.map((fld) => get_result(fld)).filter(string_is_non_empty).join(', ');
        if (result_is_non_empty('publisher')) {
            flds=['address','publisher'];
            temp_str2 = flds.map((fld) => get_result(fld)).filter(string_is_non_empty).join(': ');
        } else {
            temp_str2 = null;
        }
        if (result_is_non_empty('date')) {
            temp_str2 = [temp_str2,get_result('date')].filter(n=>n).join(', ');
        }
        result_str = [temp_str1, temp_str2].join('. ')+'.';
        break;
    case "unpub":
        flds=['author','title'];
        result_str = flds.map((fld) => get_result(fld)).filter(string_is_non_empty).join(', ')+'.';
        break;
    case "submitted":
        flds=['author','title'];
        result_str = flds.map((fld) => get_result(fld)).filter(string_is_non_empty).join(', ')+'.';
        break;
    case "tobepub":
        flds=['author','title','journal'];
        result_str = flds.map((fld) => get_result(fld)).filter(string_is_non_empty).join(', ')+'.';
        break;
    case "presented":
        flds=['author','title','event','venue','eventdate','pid'];
        result_str = flds.map((fld) => get_result(fld)).filter(string_is_non_empty).join(', ')+'.';
        break;
    case "thisconf":
        flds=['author','title','event','venue','eventdate','pid'];
        result_str = flds.map((fld) => get_result(fld)).filter(string_is_non_empty).join(', ')+'.';
        break;
    case "techrep":
        flds=['author','title','institute','address','number','date'];
        result_str = flds.map((fld) => get_result(fld)).filter(string_is_non_empty).join(', ')+'.';
        break;
    case "master":
        flds=['author','title','institute','address','date'];
        result_str = flds.map((fld) => get_result(fld)).filter(string_is_non_empty).join(', ')+'.';
        break;
    case "phd":
        flds=['author','title','institute','address','date'];
        result_str = flds.map((fld) => get_result(fld)).filter(string_is_non_empty).join(', ')+'.';
        break;
    case "arxiv":
        flds=['author','title','date'];
        result_str = flds.map((fld) => get_result(fld)).filter(string_is_non_empty).join(', ')+'.';
        break;
    case "webpage":
        flds=['title','url'];
        result_str = flds.map((fld) => get_result(fld)).filter(string_is_non_empty).join(', ')+'.';
        break;
    default:
        result_str='';
    }
    if (result_is_non_empty('doi')) {
        result_str += ` ${get_result('doi')}`;
    }
    refform.innerHTML = result_str;
};
let mandatories;

const refSelector = function (e) {
    var thisref = e.target.value;
    var flds;
    switch(thisref) {
    case "article":
        flds=['author','title','journal','volume','issue','pages','date','doi'];
        break;
    case "inproc":
        flds=['author','title','booktitle','venue','eventdate','pid','pages','doi'];
        break;
    case "inbook":
        flds=['author','title','booktitle','editor','address','publisher','date','doi'];
        break;
    case "book":
        flds=['author','title','address','publisher','date','doi'];
        break;
    case "proc":
        flds=['author','title','address','publisher','date','doi'];
        break;
    case "unpub":
        flds=['author','title'];
        break;
    case "submitted":
        flds=['author','title'];
        break;
    case "tobepub":
        flds=['author','title','journal'];
        break;
    case "presented":
        flds=['author','title','event','venue','eventdate','pid'];
        break;
    case "thisconf":
        flds=['author','title','event','venue','eventdate','pid'];
        break;
    case "techrep":
        flds=['author','title','institute','address','number','date','doi'];
        break;
    case "master":
        flds=['author','title','institute','address','date','doi'];
        break;
    case "phd":
        flds=['author','title','institute','address','date','doi'];
        break;
    case "arxiv":
        flds=['author','title','date','doi'];
        break;
    case "webpage":
        flds=['title','url'];
        break;
    default:
    }
    allfields.forEach((fld) => {
        document.getElementById(fld+field_div_suffix).className = "non-mandatory";
    });
    flds.forEach((fld) => {
        document.getElementById(fld+field_div_suffix).className = "mandatory";
    });
}
reftype.addEventListener('change',refSelector);
let get_my_full_result = function(e) {
    console.log('test');
}
document.getElementById('to_full_result').addEventListener('click',get_full_result);

const jacow_event = document.getElementById('jacow_ev');
const jacow_year = document.getElementById('jacow_yr');

for (const [k,v] of Object.entries(jacow_proc)) {
    jacow_event.options[jacow_ev.options.length] = new Option(v.name,k);
}
jacow_event.addEventListener('change',(e) => {
    jacow_year.length = 1;
    const ev = e.target.value;
    for (const [kk,vv] of Object.entries(jacow_proc[ev])) {
        if (kk != 'name') {
            jacow_year.options[jacow_year.options.length] = new Option(`${kk}, ${vv.venue}`,`${ev}-${kk}`);
        }
    }
});
jacow_year.addEventListener('change',(e) => {
    const [ev,yr] = e.target.value.split('-');
    reftype.value = 'inproc';
    reftype.dispatchEvent(new Event("change"));
    booktitle_text.value = `Proc. ${jacow_proc[ev].name}’${yr.slice(-2)}`;
    booktitle_text.dispatchEvent(new Event("input"));
    for (const fld of ['venue','eventdate']) {
        eval(`${fld}${field_text_suffix}.value = jacow_proc[ev][yr].${fld};`);
        eval(`${fld}${field_text_suffix}.dispatchEvent(new Event("input"));`);
    }
});

const selects = Array.from(document.getElementsByClassName('select'));
selects.forEach((but) =>
    but.type = 'button'
);
selects.forEach((but) =>
    but.addEventListener('click',(event) => select_to_id(event.target.id))
);
function select_to_id(sel_but_id)
{
    selected_text = getSelection().toString();
    sel_text_id = sel_but_id.slice(field_button_prefix.length)+field_text_suffix;
    document.getElementById(sel_text_id).value = selected_text;
    document.getElementById(sel_text_id).dispatchEvent(new Event('input'));
}
