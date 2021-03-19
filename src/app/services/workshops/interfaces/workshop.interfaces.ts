import { ContentCreator } from "../../contentCreators/interfaces/contentCreators.interfaces";

export interface KnowledgeArea {
    _id: string;
    name: string;
}

export interface Workshop {
    _id: string;
    title: string;
    description?: string;
    picture?: string;
    instructor: ContentCreator;
    knowledgeArea: KnowledgeArea;
    workshopTime: Date;
    workshopsEndTime: Date;
    created_at?: Date;
    updated_at?: Date;
}

export interface WorkshopListRes {
    workshops: Workshop[];
}

export interface WorkshopGetRes {
    workshop: Workshop;
}
