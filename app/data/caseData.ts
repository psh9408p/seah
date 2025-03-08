export interface CaseStudy {
  id: number;
  title: string;
  description: string;
  category: string;
  location: string;
  imageUrl: string;
  completionDate: string;
}

export const caseData: CaseStudy[] = [
  {
    id: 1,
    title: "어린이집 놀이터 시공",
    description: "안전을 최우선으로 고려한 어린이집 놀이터 우레탄 바닥재 시공",
    category: "우레탄 시공",
    location: "서울시 강남구",
    imageUrl: "/images/우레탄시공.jpg",
    completionDate: "2024.01",
  },
  {
    id: 2,
    title: "실내 체육관 바닥 시공",
    description: "고강도 내구성을 갖춘 체육관 스포츠 바닥재 시공",
    category: "체육관 바닥",
    location: "경기도 성남시",
    imageUrl: "/images/헬스장매트.jpg",
    completionDate: "2024.02",
  },
  {
    id: 3,
    title: "공원 놀이터 시설물",
    description: "친환경 소재를 활용한 공원 놀이터 시설물 설치",
    category: "놀이터 시설",
    location: "인천시 연수구",
    imageUrl: "/images/흔들놀이.jpg",
    completionDate: "2024.03",
  },
  {
    id: 4,
    title: "실외 놀이터 고무매트 시공",
    description: "내구성과 안전성이 뛰어난 고무매트 바닥재 시공",
    category: "고무매트",
    location: "서울시 송파구",
    imageUrl: "/images/고무매트/고무매트.jpg",
    completionDate: "2024.02",
  },
  {
    id: 5,
    title: "아파트 단지 놀이터 바닥재",
    description: "충격흡수력이 우수한 고무매트 시공으로 안전한 놀이공간 조성",
    category: "고무매트",
    location: "경기도 용인시",
    imageUrl: "/images/고무매트/201310m1099.jpg",
    completionDate: "2024.02",
  },
  {
    id: 6,
    title: "유치원 실외놀이터 바닥재",
    description: "미끄럼 방지 처리된 고무매트로 안전하고 쾌적한 놀이환경 구축",
    category: "고무매트",
    location: "인천시 서구",
    imageUrl: "/images/고무매트/ecoplb4.jpg",
    completionDate: "2024.03",
  },
];
