const data = [

  {
    company: '(주)먼치팩토리',
    site: '사람인',
    url: 'https://www.saramin.co.kr/zf_user/jobs/relay/view?isMypage=no&rec_idx=48718740&recommend_ids=eJxVjrkNA0EMA6txrpfkxi7k%2Bu%2FCez5gZUPRQPxKbVVcl9xffJcQZvJrWTy4jEv7iwdNkh1xIRM6yPsmikHEQVqylJO8W3Mwulwcrzl8iuiw8IOtzozZ7B7MEfeeNWIYuv%2BiQhjM7DVeqLHqJ6rIb9EHgMFAbA%3D%3D&view_type=search&searchword=react&searchType=recently&gz=1&t_ref_content=generic&t_ref=search&relayNonce=23fd2c283d32be127015&paid_fl=n&search_uuid=0f68855f-3ae5-4b5c-bbb1-b16193cca2b3&immediately_apply_layer_open=n#seq=0',
    job: 'front-end',
    career: '2',
    region: '서울',
    salary: 2200,
    essential: ['JavaScript', 'React'],
    preferential: ['HTML', 'CSS']
  },
  {
    company: '(주)놀이의발견',
    site: '사람인',
    url: 'https://www.saramin.co.kr/zf_user/jobs/relay/view?isMypage=no&rec_idx=48643658&recommend_ids=eJxNj8kRBDEIA6PZP6cE7wlk8s9ibVeN7WeXBA1RFI2Mt1R%2BfCIlgMDbYhNnai0jxcJEa%2BpAXQiGZF3YlPzQXAzaZ1W5Ig9mCe3zFk0N3CLQadgpYI0L3RznDNrQ6p6lMjVOma1r8xa5XS94SZ0ydXjyKrPMJ%2F4BYY9ATg%3D%3D&view_type=search&searchword=react&searchType=recently&gz=1&t_ref_content=generic&t_ref=search&relayNonce=2e2e89020cd2dadcc546&paid_fl=n&search_uuid=0f68855f-3ae5-4b5c-bbb1-b16193cca2b3&immediately_apply_layer_open=n#seq=0',
    job: 'front-end',
    career: '3',
    region: '서울',
    salary: 2500,
    essential: ['JavaScript', 'React', 'HTML', 'CSS'],
    preferential: ['Redux', 'Next.js', 'Github']
  },
  {
    company: '소프트랩흄',
    site: '사람인',
    url: 'https://www.saramin.co.kr/zf_user/jobs/relay/view?isMypage=no&rec_idx=48783116&recommend_ids=eJxNj7ERAzEIBKtxziHgIHYh338X1mvGiFG0glvAkgJzexLy4dcSCtCfEj3oUXDsahzk%2B6qbg4sat%2BpeyzobIQY2cnthI1sUb6RCg41e4ultjlXGkV0peXF7NGWo9sfYWaAlV8XCGfTHoI0TFEtHFhVx1vgBgytAjA%3D%3D&view_type=list&gz=1&t_ref_content=general&t_ref=jobcategory_recruit&relayNonce=16fa00aaa08b9e15f528&immediately_apply_layer_open=n#seq=0',
    job: 'front-end',
    career: '0',
    region: '대구',
    salary: 1800,
    essential: ['JavaScript', 'HTML', 'CSS'],
    preferential: ['React', 'Vue.js', 'Github', 'Redux']
  },
  {
    company: '혜움랩스',
    site: '프로그래머스',
    url: 'https://career.programmers.co.kr/job_positions/28426',
    job: 'front-end',
    career: '4',
    region: '서울',
    salary: 4200,
    essential: ['JavaScript', 'TypeScript', 'Vue.js'],
    preferential: ['Jira', 'AWS', 'Github']
  },
  {
    company: '릴리커비',
    site: '프로그래머스',
    url: 'https://career.programmers.co.kr/job_positions/10418',
    job: 'front-end',
    career: '0',
    region: '대구',
    salary: 2800,
    essential: ['JavaScript', 'HTML', 'Vue.js'],
    preferential: ['Github']
  },
  {
    company: '위트인텔리전스',
    site: '잡플레닛',
    url: 'https://www.wanted.co.kr/wd/234323?client_id=o673kBbqnYF6QVD4jKyTKhRP',
    job: 'front-end',
    career: '3',
    region: '서울',
    salary: 3200,
    essential: ['JavaScript', 'React'],
    preferential: []
  },
  {
    company: '스텝페이',
    site: '잡플레닛',
    url: 'https://www.jobplanet.co.kr/job/search?posting_ids%5B%5D=1281219',
    job: 'front-end',
    career: '5',
    region: '서울',
    salary: 4500,
    essential: ['TypeScript', 'React', 'HTML'],
    preferential: ['styled-components', 'AWS']
  },

]

const getJobPostList = () => {
  return data
}

export default getJobPostList