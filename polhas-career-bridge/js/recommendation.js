// ==================== JOB RECOMMENDATION SYSTEM ====================
// Smart job recommendation based on user skills, prodi, and progress

import { jobs, skillRoadmaps } from './data.js';
import { auth } from './auth.js';

export class JobRecommendation {
    constructor() {
        this.completedSkills = JSON.parse(localStorage.getItem('completedSkills')) || {};
    }

    // Get user's completed skills count per role
    getUserSkillsByRole() {
        const skillsByRole = {};
        
        Object.keys(this.completedSkills).forEach(key => {
            if (this.completedSkills[key]) {
                const [role] = key.split('-');
                skillsByRole[role] = (skillsByRole[role] || 0) + 1;
            }
        });
        
        return skillsByRole;
    }

    // Calculate skill match percentage for a job
    calculateSkillMatch(job) {
        if (!job.requiredSkills || job.requiredSkills.length === 0) {
            return 0;
        }

        let totalSkills = 0;
        let matchedSkills = 0;

        job.requiredSkills.forEach(skillGroup => {
            skillGroup.skills.forEach(skillName => {
                totalSkills++;
                const key = `${skillGroup.role}-${skillGroup.level}-${skillName}`;
                if (this.completedSkills[key]) {
                    matchedSkills++;
                }
            });
        });

        return totalSkills > 0 ? Math.round((matchedSkills / totalSkills) * 100) : 0;
    }

    // Get recommended jobs for user
    getRecommendedJobs(limit = 6) {
        const user = auth.getCurrentUser();
        const userSkills = this.getUserSkillsByRole();
        const recommendations = [];

        jobs.forEach(job => {
            let score = 0;
            let reasons = [];

            // 1. Prodi match (40 points)
            if (user && user.prodi) {
                const jobProdi = Array.isArray(job.prodi) ? job.prodi : [job.prodi];
                if (jobProdi.includes(user.prodi)) {
                    score += 40;
                    reasons.push('Sesuai prodi kamu');
                }
            }

            // 2. Skill match (40 points)
            const skillMatch = this.calculateSkillMatch(job);
            score += (skillMatch / 100) * 40;
            if (skillMatch > 0) {
                reasons.push(`${skillMatch}% skill match`);
            }

            // 3. Job type preference (10 points) - PKL lebih direkomendasikan untuk mahasiswa
            if (job.type === 'PKL') {
                score += 10;
                reasons.push('Cocok untuk mahasiswa');
            }

            // 4. Recent posting (10 points)
            const daysAgo = this.getDaysAgo(job.posted);
            if (daysAgo <= 7) {
                score += 10;
                reasons.push('Baru diposting');
            }

            if (score > 0) {
                recommendations.push({
                    job,
                    score,
                    reasons,
                    skillMatch
                });
            }
        });

        // Sort by score descending
        recommendations.sort((a, b) => b.score - a.score);

        return recommendations.slice(0, limit);
    }

    // Get days ago from posted date
    getDaysAgo(postedDate) {
        const posted = new Date(postedDate);
        const now = new Date();
        const diffTime = Math.abs(now - posted);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays;
    }

    // Get skill-based recommendations (jobs that match user's strongest skills)
    getSkillBasedRecommendations(limit = 3) {
        const userSkills = this.getUserSkillsByRole();
        const topRole = Object.keys(userSkills).reduce((a, b) => 
            userSkills[a] > userSkills[b] ? a : b, null
        );

        if (!topRole) return [];

        // Find jobs that require skills in user's top role
        const recommendations = jobs.filter(job => {
            if (!job.requiredSkills) return false;
            return job.requiredSkills.some(sg => sg.role === topRole);
        }).map(job => ({
            job,
            skillMatch: this.calculateSkillMatch(job)
        })).sort((a, b) => b.skillMatch - a.skillMatch);

        return recommendations.slice(0, limit);
    }

    // Get trending jobs (most viewed/saved)
    getTrendingJobs(limit = 3) {
        // For demo, return random jobs
        // In real app, track views/saves count
        const shuffled = [...jobs].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, limit).map(job => ({ job }));
    }
}

export const recommendation = new JobRecommendation();

export default {
    JobRecommendation,
    recommendation
};
