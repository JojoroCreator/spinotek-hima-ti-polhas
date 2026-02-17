// ==================== GAMIFICATION SYSTEM ====================
// Polhas CareerBridge - Achievement & Points System

// Achievement Definitions
export const achievements = {
    firstSkill: {
        id: 'firstSkill',
        name: 'First Step',
        description: 'Complete your first skill',
        icon: '🎯',
        points: 10,
        requirement: { type: 'skills', count: 1 }
    },
    skillBeginner: {
        id: 'skillBeginner',
        name: 'Skill Beginner',
        description: 'Complete 5 skills',
        icon: '📚',
        points: 25,
        requirement: { type: 'skills', count: 5 }
    },
    skillMaster: {
        id: 'skillMaster',
        name: 'Skill Master',
        description: 'Complete 10 skills',
        icon: '🏆',
        points: 50,
        requirement: { type: 'skills', count: 10 }
    },
    skillLegend: {
        id: 'skillLegend',
        name: 'Skill Legend',
        description: 'Complete 20 skills',
        icon: '👑',
        points: 100,
        requirement: { type: 'skills', count: 20 }
    },
    jobExplorer: {
        id: 'jobExplorer',
        name: 'Job Explorer',
        description: 'View 10 job details',
        icon: '🔍',
        points: 15,
        requirement: { type: 'jobViews', count: 10 }
    },
    jobHunter: {
        id: 'jobHunter',
        name: 'Job Hunter',
        description: 'Save 5 jobs',
        icon: '💼',
        points: 25,
        requirement: { type: 'savedJobs', count: 5 }
    },
    jobCollector: {
        id: 'jobCollector',
        name: 'Job Collector',
        description: 'Save 10 jobs',
        icon: '📋',
        points: 50,
        requirement: { type: 'savedJobs', count: 10 }
    },
    portfolioStarter: {
        id: 'portfolioStarter',
        name: 'Portfolio Starter',
        description: 'Reach portfolio score 50',
        icon: '⭐',
        points: 20,
        requirement: { type: 'portfolioScore', count: 50 }
    },
    portfolioPro: {
        id: 'portfolioPro',
        name: 'Portfolio Pro',
        description: 'Reach portfolio score 100',
        icon: '🌟',
        points: 50,
        requirement: { type: 'portfolioScore', count: 100 }
    },
    roadmapExplorer: {
        id: 'roadmapExplorer',
        name: 'Roadmap Explorer',
        description: 'View all 8 roadmaps',
        icon: '🗺️',
        points: 30,
        requirement: { type: 'roadmapsViewed', count: 8 }
    },
    earlyBird: {
        id: 'earlyBird',
        name: 'Early Bird',
        description: 'First time using the platform',
        icon: '🐣',
        points: 5,
        requirement: { type: 'firstVisit', count: 1 }
    },
    consistent: {
        id: 'consistent',
        name: 'Consistent',
        description: 'Visit platform 7 days in a row',
        icon: '🔥',
        points: 40,
        requirement: { type: 'consecutiveDays', count: 7 }
    }
};

// User Progress Class
export class UserProgress {
    constructor() {
        this.data = this.loadProgress();
    }

    loadProgress() {
        const saved = localStorage.getItem('userProgress');
        if (saved) {
            return JSON.parse(saved);
        }
        
        // Default progress
        return {
            points: 0,
            level: 1,
            unlockedAchievements: [],
            stats: {
                skillsCompleted: 0,
                savedJobs: 0,
                jobViews: 0,
                portfolioScore: 0,
                roadmapsViewed: [],
                firstVisit: new Date().toISOString(),
                lastVisit: new Date().toISOString(),
                visitDates: [new Date().toISOString().split('T')[0]]
            }
        };
    }

    saveProgress() {
        localStorage.setItem('userProgress', JSON.stringify(this.data));
    }

    addPoints(points) {
        this.data.points += points;
        this.updateLevel();
        this.saveProgress();
    }

    updateLevel() {
        // Level up every 100 points
        const newLevel = Math.floor(this.data.points / 100) + 1;
        if (newLevel > this.data.level) {
            this.data.level = newLevel;
            this.showLevelUp(newLevel);
        }
    }

    showLevelUp(level) {
        showNotification({
            title: '🎉 Level Up!',
            message: `Congratulations! You reached Level ${level}`,
            type: 'success',
            duration: 5000
        });
    }

    updateStat(statName, value) {
        if (statName === 'roadmapsViewed') {
            if (!this.data.stats.roadmapsViewed.includes(value)) {
                this.data.stats.roadmapsViewed.push(value);
            }
        } else {
            this.data.stats[statName] = value;
        }
        
        this.data.stats.lastVisit = new Date().toISOString();
        this.saveProgress();
        this.checkAchievements();
    }

    incrementStat(statName) {
        this.data.stats[statName]++;
        this.saveProgress();
        this.checkAchievements();
    }

    hasAchievement(achievementId) {
        return this.data.unlockedAchievements.includes(achievementId);
    }

    unlockAchievement(achievementId) {
        if (this.hasAchievement(achievementId)) return;

        const achievement = achievements[achievementId];
        this.data.unlockedAchievements.push(achievementId);
        this.addPoints(achievement.points);
        this.saveProgress();
        
        showAchievementPopup(achievement);
    }

    checkAchievements() {
        Object.keys(achievements).forEach(key => {
            const achievement = achievements[key];
            if (this.hasAchievement(achievement.id)) return;

            const req = achievement.requirement;
            let unlocked = false;

            switch (req.type) {
                case 'skills':
                    unlocked = this.data.stats.skillsCompleted >= req.count;
                    break;
                case 'savedJobs':
                    unlocked = this.data.stats.savedJobs >= req.count;
                    break;
                case 'jobViews':
                    unlocked = this.data.stats.jobViews >= req.count;
                    break;
                case 'portfolioScore':
                    unlocked = this.data.stats.portfolioScore >= req.count;
                    break;
                case 'roadmapsViewed':
                    unlocked = this.data.stats.roadmapsViewed.length >= req.count;
                    break;
                case 'firstVisit':
                    unlocked = true;
                    break;
                case 'consecutiveDays':
                    unlocked = this.checkConsecutiveDays(req.count);
                    break;
            }

            if (unlocked) {
                this.unlockAchievement(achievement.id);
            }
        });
    }

    checkConsecutiveDays(requiredDays) {
        const today = new Date().toISOString().split('T')[0];
        const visitDates = this.data.stats.visitDates || [];
        
        if (!visitDates.includes(today)) {
            visitDates.push(today);
            this.data.stats.visitDates = visitDates;
        }

        // Check consecutive days
        let consecutive = 1;
        for (let i = visitDates.length - 1; i > 0; i--) {
            const current = new Date(visitDates[i]);
            const previous = new Date(visitDates[i - 1]);
            const diffDays = (current - previous) / (1000 * 60 * 60 * 24);
            
            if (diffDays === 1) {
                consecutive++;
            } else {
                break;
            }
        }

        return consecutive >= requiredDays;
    }

    getProgress() {
        return this.data;
    }

    getAchievementProgress() {
        const total = Object.keys(achievements).length;
        const unlocked = this.data.unlockedAchievements.length;
        return {
            unlocked,
            total,
            percentage: Math.round((unlocked / total) * 100)
        };
    }
}

// Show Achievement Popup
function showAchievementPopup(achievement) {
    const popup = document.createElement('div');
    popup.className = 'achievement-popup';
    popup.innerHTML = `
        <div class="achievement-card">
            <div class="achievement-icon">${achievement.icon}</div>
            <h3 class="achievement-title">Achievement Unlocked!</h3>
            <p class="achievement-name">${achievement.name}</p>
            <p class="achievement-desc">${achievement.description}</p>
            <div class="achievement-points">+${achievement.points} points</div>
        </div>
    `;
    
    document.body.appendChild(popup);
    
    // Animate in
    setTimeout(() => popup.classList.add('show'), 100);
    
    // Remove after 5 seconds
    setTimeout(() => {
        popup.classList.remove('show');
        setTimeout(() => popup.remove(), 300);
    }, 5000);
}

// Show Notification
export function showNotification({ title, message, type = 'info', duration = 3000 }) {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <h4>${title}</h4>
            <p>${message}</p>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => notification.classList.add('show'), 100);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, duration);
}

// Initialize Gamification
export function initGamification() {
    const userProgress = new UserProgress();
    
    // Check for first visit achievement
    if (!userProgress.hasAchievement('earlyBird')) {
        userProgress.unlockAchievement('earlyBird');
    }
    
    return userProgress;
}

// Export for global use
export default {
    achievements,
    UserProgress,
    initGamification,
    showAchievementPopup,
    showNotification
};
