# Nexus Platform Data Structure

This document defines the core data entities and their relationships for the Nexus storytelling platform.

## 1. User Entity

Represents both readers and authors on the platform.

```javascript
{
  id: UUID,
  username: String, // Unique identifier for user profile
  email: String, // Unique, used for authentication
  bio: String, // Public biography (nullable)
  avatar_url: String, // URL to profile image (nullable)
  role: Enum["reader", "author"], // Primary role on platform
  reading_preferences: {
    default_theme: Enum["dark", "light", "sepia"],
    default_font_size: Enum["small", "medium", "large", "xlarge"],
    preferred_genres: String[], // Array of preferred genres
    preferred_moods: String[], // Array of preferred moods
  },
  created_at: DateTime,
  updated_at: DateTime
}
```

## 2. Story Entity

Represents a complete story, containing metadata and chapters.

```javascript
{
  id: UUID,
  author_id: UUID, // References User.id
  title: String, // Title of the story
  slug: String, // URL-friendly version of title
  logline: String, // Short summary or hook (1-2 sentences)
  status: Enum["draft", "published", "scheduled"],
  cover_image_url: String, // URL to cover art (nullable)
  ambiance_style: {
    theme: Enum["none", "gradient", "texture", "custom"],
    color_scheme: String, // Hex code or predefined scheme
    sound_scape: Enum["none", "rain", "space", "forest", "custom"]
  },
  published_at: DateTime, // Null if not published
  created_at: DateTime,
  updated_at: DateTime
}
```

## 3. StoryMeta Entity

Contains detailed metadata about a story, separated for performance reasons.

```javascript
{
  story_id: UUID, // References Story.id
  genres: String[], // Array of genres (e.g., "cyberpunk", "hard sci-fi")
  moods: String[], // Array of moods (e.g., "dark", "hopeful")
  word_count: Integer,
  reading_time_est: Integer, // Estimated reading time in minutes
  futurism_type: String, // e.g., "biopunk", "solarpunk", "time travel"
  tags: String[], // User-generated tags for discovery
  content_warnings: String[] // Optional warnings (violence, etc.)
}
```

## 4. Chapter Entity

Represents a single chapter within a story.

```javascript
{
  id: UUID,
  story_id: UUID, // References Story.id
  title: String, // Chapter title
  content: String, // Main chapter content in HTML/markdown
  chapter_index: Integer, // Position in story (0-based)
  created_at: DateTime,
  updated_at: DateTime
}
```

## 5. Resonance Entity

Replaces traditional "likes" with a more nuanced engagement system.

```javascript
{
  id: UUID,
  user_id: UUID, // References User.id
  story_id: UUID, // References Story.id
  tags: String[], // User-assigned tags (e.g., "mind-bending", "emotional")
  created_at: DateTime
}
```

## 6. Comment Entity

Enables threaded discussions on stories.

```javascript
{
  id: UUID,
  user_id: UUID, // References User.id
  story_id: UUID, // References Story.id
  parent_comment_id: UUID, // Nullable, references Comment.id for threading
  content: String, // Comment text
  highlighted_text: String, // Optional quoted text being commented on
  created_at: DateTime,
  updated_at: DateTime
}
```

## 7. Relationship Map

```
User 1--* Story (one user can author many stories)
Story 1--1 StoryMeta (one-to-one relationship)
Story 1--* Chapter (one story contains many chapters)
User *--* Story via Resonance (many-to-many through Resonance)
User *--* Story via Comment (many-to-many through Comment)
Comment *--* Comment (self-referencing for threading)
```

## 8. Additional Considerations

1. **Indexing Strategy**:
   - Primary keys on all `id` fields
   - Indexes on `Story.slug` for URL routing
   - Compound indexes on `StoryMeta.genres` and `StoryMeta.moods` for filtering
   - Indexes on `Resonance.story_id` and `Resonance.user_id` for engagement metrics

2. **Future Extensibility**:
   - Series/Collection entity for grouping related stories
   - Bookmark/Favorite entity for user reading lists
   - Subscription/Patronage entity for monetization features
   - Analytics entity for author insights

This data structure provides a solid foundation for the Nexus platform while allowing for future growth and feature additions.